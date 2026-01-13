
function generateTrajectory() {
  const name = document.getElementById("devName").value;
  const year = document.getElementById("startYear").value;
  const signals = document.getElementById("signals").value
    .split("\n")
    .filter(s => s.trim() !== "");

  if (!name || !year || signals.length === 0) {
    alert("Please fill all fields.");
    return;
  }

  const output = document.getElementById("output");
  output.classList.remove("hidden");

  output.innerHTML = `
    <strong>Developer:</strong> ${name}<br/>
    <strong>Active Since:</strong> ${year}<br/><br/>

    <strong>Builder Signals:</strong>
    <ul>
      ${signals.map(s => `<li>${s}</li>`).join("")}
    </ul>

    <strong>Trajectory:</strong> Active movement detected ↑
  `;
}
