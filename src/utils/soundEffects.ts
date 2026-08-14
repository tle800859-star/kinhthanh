// Web Audio API Sound Synthesizer for Quiz Feedback
// No external MP3 downloads required - works instantly and reliably in all browsers

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Play a grand, powerful, celebratory fanfare sound for correct answers!
 * (Trầm hùng, hoành tráng, vui tươi chúc mừng)
 */
export function playCorrectSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Victory Arpeggio / Fanfare notes: C5, E5, G5, C6
    const notes = [
      { freq: 523.25, time: 0.0, duration: 0.15 },  // C5
      { freq: 659.25, time: 0.12, duration: 0.15 }, // E5
      { freq: 783.99, time: 0.24, duration: 0.18 }, // G5
      { freq: 1046.50, time: 0.38, duration: 0.55 }, // C6 (High Grand Finish)
    ];

    notes.forEach((n) => {
      // Primary Oscillator (Sine/Triangle blend for warm brass/chime)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'sine';

      osc1.frequency.setValueAtTime(n.freq, now + n.time);
      osc2.frequency.setValueAtTime(n.freq * 2, now + n.time); // Harmonic

      const start = now + n.time;
      const end = start + n.duration;

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.3, start + 0.03); // Quick attack
      gain.gain.exponentialRampToValueAtTime(0.001, end);  // Smooth release

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(start);
      osc2.start(start);
      osc1.stop(end);
      osc2.stop(end);
    });

    // Sub-bass thump for grand impact
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(130.81, now + 0.38); // C3
    subGain.gain.setValueAtTime(0.35, now + 0.38);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    subOsc.start(now + 0.38);
    subOsc.stop(now + 0.8);

  } catch (err) {
    console.warn('Audio playback error:', err);
  }
}

/**
 * Play a gentle, encouraging sound for incorrect answers.
 * (Nhẹ nhàng, êm ái, vỗ vỗ khích lệ học sinh tiếp tục cố gắng)
 */
export function playIncorrectSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Soft warm two-tone melody (e.g. F4 -> D4 gentle chime)
    const notes = [
      { freq: 349.23, time: 0.0, duration: 0.25 }, // F4
      { freq: 293.66, time: 0.18, duration: 0.4 },  // D4
    ];

    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine'; // Soft, warm sine wave
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      const start = now + n.time;
      const end = start + n.duration;

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.15, start + 0.05); // Soft attack
      gain.gain.exponentialRampToValueAtTime(0.001, end);   // Gentle fade out

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(end);
    });
  } catch (err) {
    console.warn('Audio playback error:', err);
  }
}
