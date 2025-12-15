import gsap from "gsap";

export function initHeroAnimation() {
  const arr: any[] = [];
  const c = document.querySelector("#c") as HTMLCanvasElement | null;
  const c2 = document.querySelector("#c2") as HTMLCanvasElement | null;
  if (!c || !c2) return () => {};

  const ctx = c.getContext("2d")!;
  const ctx2 = c2.getContext("2d")!;
  const cw = (c.width = 4000);
  const ch = (c.height = 4000);
  const T = Math.PI * 2;
  const m = { x: cw / 2, y: 0 };
  const xTo = gsap.quickTo(m, "x", { duration: 1.5, ease: "expo" });
  const yTo = gsap.quickTo(m, "y", { duration: 1.5, ease: "expo" });

  const arr2: any[] = [];
  c2.width = c2.height = 4000;

  const onMove = (e: PointerEvent) => {
    const rect = c.getBoundingClientRect();
    const scaleX = c.width / rect.width;
    const scaleY = c.height / rect.height;
    xTo((e.x - rect.left) * scaleX);
    yTo((e.y - rect.top) * scaleY);
  };
  c.addEventListener("pointermove", onMove);

  for (let i = 0; i < 999; i++) {
    arr.push({
      i,
      cx: cw / 2,
      cy: gsap.utils.mapRange(0, 999, 600, 3700, i),
      r: i < 900 ? gsap.utils.mapRange(0, 999, 3, 770, i) : 50,
      dot: 9,
      prog: 0.25,
      s: 1,
    });
    const d = 99;
    arr[i].t = gsap
      .timeline({ repeat: -1 })
      .to(arr[i], { duration: d, prog: "+=1", ease: "slow(0.3, 0.4)" })
      .to(
        arr[i],
        {
          duration: d / 2,
          s: 0.15,
          repeat: 1,
          yoyo: true,
          ease: "power3.inOut",
        },
        0
      )
      .seek(Math.random() * d);

    arr2.push({
      x: cw * Math.random(),
      y: -9,
      s: 3 + 5 * Math.random(),
      a: 0.1 + 0.5 * Math.random(),
    });
    arr2[i].t = gsap
      .to(arr2[i], { ease: "none", y: ch, repeat: -1 })
      .seek(Math.random() * 99)
      .timeScale(arr2[i].s / 700);
  }

  const render = () => {
    ctx.clearRect(0, 0, cw, ch);
    ctx2.clearRect(0, 0, cw, ch);
    arr.forEach(drawDot);
    arr2.forEach(drawSnow);
  };

  const drawDot = (cEl: any) => {
    const angle = cEl.prog * T;
    const vs = 0.2;
    const x = Math.cos(angle) * cEl.r + cEl.cx;
    const y = Math.sin(angle) * cEl.r * vs + cEl.cy;
    const d = Math.sqrt((x - m.x) ** 2 + (y - m.y) ** 2);
    const ms = gsap.utils.clamp(0.07, 1, d / cw);
    ctx.beginPath();
    ctx.arc(x, y, (cEl.dot * cEl.s) / 2 / ms, 0, T);
    ctx.fill();
    ctx.lineWidth = (cEl.dot * cEl.s * 2) / ms;
    ctx.stroke();
  };

  const drawSnow = (cEl: any) => {
    const ys = gsap.utils.interpolate(1.3, 0.1, cEl.y / ch);
    ctx2.beginPath();
    ctx2.arc(cEl.x, cEl.y, cEl.s * ys, 0, T);
    ctx2.globalAlpha = cEl.a * ys;
    ctx2.fill();
  };

  ctx.fillStyle = ctx2.fillStyle = "#fff";
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  ctx.globalCompositeOperation = "lighter";

  gsap.ticker.add(render);
  gsap.from(arr, {
    duration: 1,
    dot: 0,
    ease: "back.out(9)",
    stagger: -0.0009,
  });
  gsap.from(m, { duration: 1.5, y: ch * 1.2, ease: "power2.inOut" });

  return () => {
    c.removeEventListener("pointermove", onMove);
    gsap.ticker.remove(render);
    arr.forEach(cEl => cEl.t?.kill?.());
    arr2.forEach(cEl => cEl.t?.kill?.());
  };
}
