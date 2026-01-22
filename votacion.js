document.addEventListener("DOMContentLoaded", () => {
  const podioGrid = document.getElementById("podio-grid");

  const players = [
    { name: "Robinho", votos: 3, escalones: 3 },
    { name: "Ruud", votos: 1, escalones: 2 },
    { name: "Campera", votos: 1, escalones: 2 },
    { name: "Durazno", votos: 0, escalones: 1 },
    { name: "Lux", votos: 0, escalones: 1 },
    { name: "DPL", votos: 0, escalones: 1 },
    { name: "Aleman", votos: 0, escalones: 1 },
    { name: "Chisito", votos: 0, escalones: 1 },
    { name: "Gersinho", votos: 0, escalones: 1 },
    { name: "Bnnx", votos: 0, escalones: 1 },
    { name: "Hellfire", votos: 0, escalones: 1 },
    
  ];

  let html = "";

  players.forEach(player => {
    const altura = player.escalones * 22;

    html += `
      <div class="podio-card" style="height: ${altura + 80}px;">
        <h3>${player.name}</h3>
        <div class="escalones">
    `;

    for (let i = 0; i < player.escalones; i++) {
      html += `<div class="escalon"></div>`;
    }

    html += `
        </div>
        <p class="votos">Votos: ${player.votos}</p>
      </div>
    `;
  });

  podioGrid.innerHTML = html;
});

