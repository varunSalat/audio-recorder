export const drawLine = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.beginPath();
  ctx.moveTo(0, HEIGHT / 2);

  for (let i = 0; i < dataArray.length; i++) {
    const x = (i / dataArray.length) * WIDTH;
    const y = HEIGHT / 2 + (dataArray[i] / 128 - 1) * (HEIGHT / 2);
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "#5ee7df";
  ctx.lineWidth = 2;
  ctx.stroke();
};

export const drawCircle = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const radius = Math.min(WIDTH, HEIGHT) / 4;

  ctx.beginPath();
  for (let i = 0; i < dataArray.length; i++) {
    const angle = (i / dataArray.length) * Math.PI * 2;
    const magnitude = (dataArray[i] / 128) * 50;
    const x = centerX + (radius + magnitude) * Math.cos(angle);
    const y = centerY + (radius + magnitude) * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = "#ff5f6d";
  ctx.lineWidth = 2;
  ctx.stroke();
};

export const drawBars = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, "#ff5f6d");
  gradient.addColorStop(0.5, "#ffc371");
  gradient.addColorStop(1, "#5ee7df");
  ctx.fillStyle = gradient;

  const barWidth = 2;
  const spacing = 1.5;
  const maxBarHeight = HEIGHT / 2.5;
  const numBars = Math.floor(WIDTH / (barWidth + spacing));

  for (let i = 0; i < numBars; i++) {
    const barHeight = Math.pow(dataArray[i] / 128, 8) * maxBarHeight;
    const x = (barWidth + spacing) * i;
    const y = HEIGHT / 2 - barHeight / 2;
    ctx.fillRect(x, y, barWidth, barHeight);
  }
};

// waveLine.ts
export const drawWaveLine = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.beginPath();
  ctx.moveTo(0, HEIGHT / 2);

  for (let i = 0; i < dataArray.length; i++) {
    const x = (i / dataArray.length) * WIDTH;
    const y =
      HEIGHT / 2 +
      Math.sin((i / dataArray.length) * Math.PI * 4) *
        (dataArray[i] / 128) *
        (HEIGHT / 3);
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "#00f0ff";
  ctx.lineWidth = 2;
  ctx.stroke();
};

// verticalBars.ts
export const drawVerticalBars = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  const barWidth = 3;
  const spacing = 2;
  const numBars = Math.floor(WIDTH / (barWidth + spacing));

  for (let i = 0; i < numBars; i++) {
    const barHeight = (dataArray[i] / 128) * HEIGHT;
    const gradient = ctx.createLinearGradient(0, HEIGHT - barHeight, 0, HEIGHT);
    gradient.addColorStop(0, "#ff0");
    gradient.addColorStop(1, "#f00");
    ctx.fillStyle = gradient;
    ctx.fillRect(
      i * (barWidth + spacing),
      HEIGHT - barHeight,
      barWidth,
      barHeight
    );
  }
};

// radialLines.ts
export const drawRadialLines = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const radius = Math.min(WIDTH, HEIGHT) / 3;

  for (let i = 0; i < dataArray.length; i++) {
    const angle = (i / dataArray.length) * Math.PI * 2;
    const length = (dataArray[i] / 128) * radius;
    const x = centerX + Math.cos(angle) * length;
    const y = centerY + Math.sin(angle) * length;
    ctx.strokeStyle = `hsl(${(i / dataArray.length) * 360}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

// circularDots.ts
export const drawCircularDots = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const radius = Math.min(WIDTH, HEIGHT) / 4;

  for (let i = 0; i < dataArray.length; i += 2) {
    const angle = (i / dataArray.length) * Math.PI * 2;
    const magnitude = (dataArray[i] / 128) * 20;
    const x = centerX + (radius + magnitude) * Math.cos(angle);
    const y = centerY + (radius + magnitude) * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#ff0";
    ctx.fill();
  }
};

// pulseCircle.ts
export const drawPulseCircle = (
  dataArray: Uint8Array,
  ctx: CanvasRenderingContext2D,
  HEIGHT: number,
  WIDTH: number
) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const amplitude = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

  ctx.beginPath();
  ctx.arc(centerX, centerY, 20 + (amplitude / 128) * 50, 0, Math.PI * 2);
  ctx.strokeStyle = "#0f0";
  ctx.lineWidth = 3;
  ctx.stroke();
};
