String.prototype.safeCSS = function() {
  return encodeURIComponent(this)
    .toLowerCase()
    .replace('\'', '')
    .replace(/\.|%[0-9a-z]{2}/gi, '');
}

function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function performUpdates(updateIndex) {
  if (!updateIndex) {
    return;
  }
  for (let i = 0; i < updateIndex; i++) {
    const update = updates[i];
    switch (update.type) {
      case 'playerStat':
        updatePlayerStat(update);
        break;
    }
  }
}

function updatePlayerStat(update) {
  const player = findLeaguePlayer(update.player);
  player[update.stat] += update.value;
}

function findLeaguePlayer(name) {
  for (const [key, team] of Object.entries(league)) {
    for (let i = 0; i < team.players.length; i++) {
      if (team.players[i].name === name) {
        return team.players[i];
      }
    }
  }
  console.error(`Player ${name} not found.`);
}

function drawPlayer(unit, color1, color2) {
  const output = `
  <div>
  <div class="field-player2 ${unit.team}" style="border-top-color: ${color1}; border-bottom-color: ${color2};">
    <div class="team-flag"></div>
    <div class="player-name">
      <span class="short">${shortName(unit)}</span>
      <span class="full">${unit.name}</span>
    </div>
    <div class="stats">
      <div class="stat"><span class="label"><span class="text">Jmp</span></span>${drawStat(unit.jump)}</div>
      <div class="stat"><span class="label"><span class="text">Acc</span></span>${drawStat(unit.accuracy)}</div>
      <div class="stat"><span class="label"><span class="text">Mov</span></span>${drawStat(unit.speed)}</div>
      <div class="stat"><span class="label"><span class="text">Stb</span></span>${drawStat(unit.bStability ? unit.bStability : unit.stability)}</div>
    </div>
  </div>
  </div>      
    `;
  return output;
}

function shortName(unit) {
  const maxLength = 17;
  if (unit.name.length > maxLength) {
    return unit.name.substr(0, maxLength - 3) + '...';
  }
  return unit.name;
}

function drawStat(count) {
  let output = '';
  for(let i = 0; i < 6; i++) {
    if (i < count) {
      output += '<span class="filled bar"></span>';
    }
    else {
      output += '<span class="unfilled bar"></span>';
    }
  }
  return output;
}
