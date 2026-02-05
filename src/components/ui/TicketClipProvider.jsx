"use client";

export default function TicketClipProvider() {
  const W = 317;
  const H = 320;

  const smallTop = [20, 51, 82];
  const bigMid = [127];
  const smallBot = [182, 213.5, 245];

  const smallR = 11;
  const bigR = 22;

  const make = (y, r, side) =>
    side === "right"
      ? `L ${W} ${y - r} A ${r} ${r} 0 0 0 ${W} ${y + r}`
      : `L 0 ${y + r} A ${r} ${r} 0 0 0 0 ${y - r}`;

  const path = [
    `M 0 0 L ${W} 0`,
    ...smallTop.map((y) => make(y, smallR, "right")),
    ...bigMid.map((y) => make(y, bigR, "right")),
    ...smallBot.map((y) => make(y, smallR, "right")),
    `L ${W} ${H} L 0 ${H}`,
    ...smallBot.slice().reverse().map((y) => make(y, smallR, "left")),
    ...bigMid.map((y) => make(y, bigR, "left")),
    ...smallTop.slice().reverse().map((y) => make(y, smallR, "left")),
    "Z",
  ].join(" ");

  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id="ticket-scallop" clipPathUnits="userSpaceOnUse">
          <path d={path} />
        </clipPath>
      </defs>
    </svg>
  );
}
