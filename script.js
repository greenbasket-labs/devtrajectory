
function generateTrajectory() {
  const name = document.getElementById("devName").value || "Anonymous Builder";
  const year = document.getElementById("startYear").value || "Unknown";
  const signalsRaw = document.getElementById("signals").value;
  const timeframe = document.getElementById("timeframe").value;

  const signals = signalsRaw
    .split("\n")
    .filter(s => s.trim() !== "");

  const output = document.getElementById("output");

  output.innerHTML = `
    <strong>Developer:</strong> ${name}<br/>
    <strong>Active Since:</strong> ${year}<br/>
    <strong>Viewing Trajectory:</strong> ${timeframe}<br/><br/>

    <strong>Builder Signals:</strong>
    <ul>
      ${signals.map(s => `<li>${s}</li>`).join("")}
    </ul>
  `;

  output.classList.remove("hidden");
}
