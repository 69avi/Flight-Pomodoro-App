const airports = [
  { code: "LHR", city: "London", country: "United Kingdom", lat: 51.47, lng: -0.4543 },
  { code: "CDG", city: "Paris", country: "France", lat: 49.0097, lng: 2.5479 },
  { code: "FRA", city: "Frankfurt", country: "Germany", lat: 50.0379, lng: 8.5622 },
  { code: "AMS", city: "Amsterdam", country: "Netherlands", lat: 52.3105, lng: 4.7683 },
  { code: "MAD", city: "Madrid", country: "Spain", lat: 40.4983, lng: -3.5676 },
  { code: "FCO", city: "Rome", country: "Italy", lat: 41.8003, lng: 12.2389 },
  { code: "ZRH", city: "Zurich", country: "Switzerland", lat: 47.4581, lng: 8.5555 },
  { code: "IST", city: "Istanbul", country: "Turkey", lat: 41.2753, lng: 28.7519 },
  { code: "ATH", city: "Athens", country: "Greece", lat: 37.9364, lng: 23.9445 },
  { code: "CPH", city: "Copenhagen", country: "Denmark", lat: 55.618, lng: 12.656 },
  { code: "ARN", city: "Stockholm", country: "Sweden", lat: 59.6519, lng: 17.9186 },
  { code: "OSL", city: "Oslo", country: "Norway", lat: 60.1939, lng: 11.1004 },
  { code: "HEL", city: "Helsinki", country: "Finland", lat: 60.3172, lng: 24.9633 },
  { code: "WAW", city: "Warsaw", country: "Poland", lat: 52.1657, lng: 20.9671 },
  { code: "PRG", city: "Prague", country: "Czechia", lat: 50.1008, lng: 14.26 },
  { code: "VIE", city: "Vienna", country: "Austria", lat: 48.1103, lng: 16.5697 },
  { code: "DUB", city: "Dublin", country: "Ireland", lat: 53.4213, lng: -6.2701 },
  { code: "LIS", city: "Lisbon", country: "Portugal", lat: 38.7742, lng: -9.1342 },
  { code: "KEF", city: "Reykjavik", country: "Iceland", lat: 63.985, lng: -22.6056 },
  { code: "JFK", city: "New York", country: "United States", lat: 40.6413, lng: -73.7781 },
  { code: "LAX", city: "Los Angeles", country: "United States", lat: 33.9416, lng: -118.4085 },
  { code: "SFO", city: "San Francisco", country: "United States", lat: 37.6213, lng: -122.379 },
  { code: "ORD", city: "Chicago", country: "United States", lat: 41.9742, lng: -87.9073 },
  { code: "ATL", city: "Atlanta", country: "United States", lat: 33.6407, lng: -84.4277 },
  { code: "YYZ", city: "Toronto", country: "Canada", lat: 43.6777, lng: -79.6248 },
  { code: "YVR", city: "Vancouver", country: "Canada", lat: 49.1967, lng: -123.1815 },
  { code: "MEX", city: "Mexico City", country: "Mexico", lat: 19.4361, lng: -99.0719 },
  { code: "CUN", city: "Cancun", country: "Mexico", lat: 21.0365, lng: -86.8771 },
  { code: "GRU", city: "Sao Paulo", country: "Brazil", lat: -23.4356, lng: -46.4731 },
  { code: "GIG", city: "Rio de Janeiro", country: "Brazil", lat: -22.8099, lng: -43.2506 },
  { code: "EZE", city: "Buenos Aires", country: "Argentina", lat: -34.8222, lng: -58.5358 },
  { code: "SCL", city: "Santiago", country: "Chile", lat: -33.3928, lng: -70.7858 },
  { code: "LIM", city: "Lima", country: "Peru", lat: -12.0219, lng: -77.1143 },
  { code: "BOG", city: "Bogota", country: "Colombia", lat: 4.7016, lng: -74.1469 },
  { code: "PTY", city: "Panama City", country: "Panama", lat: 9.0714, lng: -79.3835 },
  { code: "DXB", city: "Dubai", country: "United Arab Emirates", lat: 25.2532, lng: 55.3657 },
  { code: "DOH", city: "Doha", country: "Qatar", lat: 25.2731, lng: 51.6081 },
  { code: "AUH", city: "Abu Dhabi", country: "United Arab Emirates", lat: 24.4539, lng: 54.6511 },
  { code: "JED", city: "Jeddah", country: "Saudi Arabia", lat: 21.6702, lng: 39.1528 },
  { code: "RUH", city: "Riyadh", country: "Saudi Arabia", lat: 24.9576, lng: 46.6988 },
  { code: "TLV", city: "Tel Aviv", country: "Israel", lat: 32.0114, lng: 34.8867 },
  { code: "CAI", city: "Cairo", country: "Egypt", lat: 30.112, lng: 31.400 },
  { code: "DEL", city: "Delhi", country: "India", lat: 28.5562, lng: 77.1 },
  { code: "BOM", city: "Mumbai", country: "India", lat: 19.0896, lng: 72.8656 },
  { code: "BLR", city: "Bengaluru", country: "India", lat: 13.1986, lng: 77.7066 },
  { code: "MAA", city: "Chennai", country: "India", lat: 12.9941, lng: 80.1709 },
  { code: "CCU", city: "Kolkata", country: "India", lat: 22.6547, lng: 88.4467 },
  { code: "CMB", city: "Colombo", country: "Sri Lanka", lat: 7.1808, lng: 79.8841 },
  { code: "KTM", city: "Kathmandu", country: "Nepal", lat: 27.6966, lng: 85.3591 },
  { code: "DAC", city: "Dhaka", country: "Bangladesh", lat: 23.8433, lng: 90.3978 },
  { code: "ISB", city: "Islamabad", country: "Pakistan", lat: 33.5607, lng: 72.8516 },
  { code: "MLE", city: "Male", country: "Maldives", lat: 4.1918, lng: 73.5291 },
  { code: "HND", city: "Tokyo", country: "Japan", lat: 35.5494, lng: 139.7798 },
  { code: "ICN", city: "Seoul", country: "South Korea", lat: 37.4602, lng: 126.4407 },
  { code: "PEK", city: "Beijing", country: "China", lat: 40.0799, lng: 116.6031 },
  { code: "PVG", city: "Shanghai", country: "China", lat: 31.1443, lng: 121.8083 },
  { code: "HKG", city: "Hong Kong", country: "Hong Kong", lat: 22.308, lng: 113.9185 },
  { code: "TPE", city: "Taipei", country: "Taiwan", lat: 25.0797, lng: 121.2342 },
  { code: "SIN", city: "Singapore", country: "Singapore", lat: 1.3644, lng: 103.9915 },
  { code: "BKK", city: "Bangkok", country: "Thailand", lat: 13.69, lng: 100.7501 },
  { code: "KUL", city: "Kuala Lumpur", country: "Malaysia", lat: 2.7456, lng: 101.7072 },
  { code: "CGK", city: "Jakarta", country: "Indonesia", lat: -6.1275, lng: 106.6537 },
  { code: "MNL", city: "Manila", country: "Philippines", lat: 14.5086, lng: 121.0198 },
  { code: "HAN", city: "Hanoi", country: "Vietnam", lat: 21.2187, lng: 105.8042 },
  { code: "SGN", city: "Ho Chi Minh City", country: "Vietnam", lat: 10.8188, lng: 106.6519 },
  { code: "SYD", city: "Sydney", country: "Australia", lat: -33.9399, lng: 151.1753 },
  { code: "MEL", city: "Melbourne", country: "Australia", lat: -37.669, lng: 144.841 },
  { code: "BNE", city: "Brisbane", country: "Australia", lat: -27.3842, lng: 153.1175 },
  { code: "AKL", city: "Auckland", country: "New Zealand", lat: -37.0082, lng: 174.785 },
  { code: "NBO", city: "Nairobi", country: "Kenya", lat: -1.3192, lng: 36.9278 },
  { code: "JNB", city: "Johannesburg", country: "South Africa", lat: -26.1337, lng: 28.242 },
  { code: "CPT", city: "Cape Town", country: "South Africa", lat: -33.9715, lng: 18.6021 },
  { code: "ADD", city: "Addis Ababa", country: "Ethiopia", lat: 8.9779, lng: 38.7993 },
  { code: "CMN", city: "Casablanca", country: "Morocco", lat: 33.3675, lng: -7.5899 },
  { code: "LOS", city: "Lagos", country: "Nigeria", lat: 6.5774, lng: 3.3212 },
  { code: "ACC", city: "Accra", country: "Ghana", lat: 5.6052, lng: -0.1668 },
  { code: "MRU", city: "Mauritius", country: "Mauritius", lat: -20.4302, lng: 57.6836 },
];
const seats = ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D"];
const avatars = { pilot: "👨‍✈️", traveler: "🙂", creator: "👨‍💻" };
const destinationAccess = {
  CDG: { tier: "Short Hop", unlocked: true },
  DXB: { tier: "Deep Work", unlocked: true },
  DEL: { tier: "Home Hub", unlocked: true },
  HND: { tier: "Long Focus", unlocked: true },
  SIN: { tier: "Regional Focus", unlocked: true },
  SYD: { tier: "Oceanic", unlocked: true },
  SFO: { tier: "Transpacific", unlocked: true },
  JFK: { tier: "Atlantic", unlocked: true },
  FRA: { tier: "Continental", unlocked: true },
};
const focusModes = [
  { id: "study", title: "Study", detail: "Reading, revision, exam prep", seat: "2A" },
  { id: "work", title: "Work", detail: "Tasks, deep work, planning", seat: "3A" },
  { id: "create", title: "Create", detail: "Writing, design, sketching", seat: "1D" },
];
const airlines = [
  { id: "qatar", name: "Qatar Airways", detail: "Quiet premium cabin", badge: "White + burgundy" },
  { id: "indigo", name: "IndiGo", detail: "Clean short-haul focus", badge: "White + blue" },
  { id: "boeing", name: "Boeing Business", detail: "Modern blue aircraft theme", badge: "White + sky blue" },
  { id: "private", name: "Private Jet", detail: "Unlocked after three 2-hour flights", badge: "Black + gold" },
];

Object.assign(avatars, {
  pilot: "\u{1F9D1}\u200D\u2708\uFE0F",
  traveler: "\u{1F642}",
  creator: "\u{1F9D1}\u200D\u{1F4BB}",
});

const state = {
  origin: "LHR", destination: "FRA", seat: "3A", avatar: "pilot",
  focusMode: "work", focusLabel: "", airline: "indigo", boarded: false, sessionRecorded: false,
  running: false, startedAt: 0, elapsedBeforePause: 0, durationSeconds: 0,
  map: null, routeLayer: null, planeMarker: null, tickId: null,
  audioOn: false, audio: null,
  wakeLock: null,
  qualifyingSessions: Number(localStorage.getItem("focusFlightTwoHourSessions") || 0),
  washroomBreaksUsed: 0, washroomBreakLimit: 0, washroomActive: false, washroomRemaining: 0,
  washroomTimer: null, wasRunningBeforeBreak: false,
};
const $ = (id) => document.getElementById(id);
const refs = {};

window.addEventListener("load", () => {
  ["originSelect","destinationSelect","avatarSelect","seatSelect","seatMap","preSeatMap","preBookedSeat","timerDisplay","progressFill","progressPlane","phaseLabel","distanceLabel","etaLabel","flightStatus","flightCode","bookedSeat","pauseButton","mapButton","routeFallback","fallbackOrigin","fallbackDestination","audioButton","destinationGrid","purposeGrid","routeProgressFill","sessionsLabel","unlockLabel","routeTier","recommendedMinutes","routeNote","routeTimeSummary","routeDistanceSummary","routeFromSummary","routeToSummary","routeFocusSummary","liveRouteSummary","liveTotalSummary","liveProgressSummary","passRoute","passCities","passMode","passDuration","passDistance","passFlight","passBoarding","passTakeoff","passSeat","passGate","focusLabelInput","focusLabelPrompt","levelPill","airlineGrid","privateUnlockLabel","privateDestinationGrid","privateJetStatus","privateJetCopy","progressSummary","progressGraph","weekRangeLabel","improvedInsight","attentionInsight","acedInsight","washroomButton","breakStatus","wakeStatus","flightVideoOverlay","flightVideo","flightVideoLabel"].forEach((id) => refs[id] = $(id));
  refs.shell = document.querySelector(".app-shell");
  refs.tabButtons = Array.from(document.querySelectorAll("[data-tab-target]"));
  refs.tabPages = Array.from(document.querySelectorAll(".tab-page"));
  refs.shell.dataset.airline = state.airline;
  refs.shell.dataset.avatar = state.avatar;
  fillSelects();
  renderAirlineCards();
  renderDestinationCards();
  renderPrivateJetTab();
  renderPurposeCards();
  renderPreSeatMap();
  renderSeats();
  wireEvents();
  initMap();
  recalculateFlight();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && state.running) requestWakeLock();
  });
});

function fillSelects() {
  const options = airports.map((a) => `<option value="${a.code}">${a.city}, ${a.country} (${a.code})</option>`).join("");
  refs.originSelect.innerHTML = options;
  refs.destinationSelect.innerHTML = options;
  refs.seatSelect.innerHTML = seats.map((s) => `<option value="${s}">${s}</option>`).join("");
  refs.originSelect.value = state.origin;
  refs.destinationSelect.value = state.destination;
  refs.seatSelect.value = state.seat;
  refs.avatarSelect.value = state.avatar;
}

function wireEvents() {
  refs.tabButtons.forEach((button) => {
    button.addEventListener("click", () => showTab(button.dataset.tabTarget));
  });
  refs.originSelect.addEventListener("change", (e) => {
    if (state.boarded) return;
    setRoute("origin", e.target.value);
  });
  refs.destinationSelect.addEventListener("change", (e) => {
    if (state.boarded) return;
    setRoute("destination", e.target.value);
  });
  refs.seatSelect.addEventListener("change", (e) => {
    if (state.boarded) return;
    state.seat = e.target.value;
    renderPreSeatMap();
    renderSeats();
    renderCabinDetails();
  });
  refs.avatarSelect.addEventListener("change", (e) => {
    if (state.boarded) return;
    state.avatar = e.target.value;
    refs.shell.dataset.avatar = state.avatar;
    renderSeats();
  });
  $("swapButton").addEventListener("click", () => {
    if (state.boarded) return;
    [state.origin, state.destination] = [state.destination, state.origin];
    refs.originSelect.value = state.origin;
    refs.destinationSelect.value = state.destination;
    resetTimer();
    recalculateFlight();
  });
  refs.pauseButton.addEventListener("click", toggleTimer);
  refs.pauseButton.addEventListener("click", () => showTab("flightTab"));
  $("endButton").addEventListener("click", () => {
    resetTimer();
    showTab("airportTab");
  });
  $("themeButton").addEventListener("click", toggleTheme);
  refs.audioButton.addEventListener("click", toggleCabinAudio);
  $("fullscreenButton").addEventListener("click", toggleFullscreen);
  $("pureButton").addEventListener("click", () => refs.shell.classList.toggle("pure"));
  refs.mapButton.addEventListener("click", toggleMap);
  $("homeHubButton").addEventListener("click", () => {
    if (state.boarded) return;
    state.origin = "DEL";
    refs.originSelect.value = "DEL";
    if (state.destination === "DEL") {
      state.destination = "SIN";
      refs.destinationSelect.value = "SIN";
    }
    resetTimer();
    recalculateFlight();
    showTab("routeTab");
  });
  $("manualRouteButton").addEventListener("click", () => {
    showTab("routeTab");
    refs.destinationSelect.focus();
  });
  $("continueToRouteButton").addEventListener("click", () => showTab("routeTab"));
  $("continueToPassButton").addEventListener("click", () => showTab("boardingTab"));
  $("boardButton").addEventListener("click", () => {
    tearTicketAndBoard();
  });
  refs.focusLabelInput.addEventListener("input", (event) => {
    state.focusLabel = event.target.value.trim();
  });
  refs.washroomButton.addEventListener("click", startWashroomBreak);
}

function showTab(tabId) {
  refs.tabPages.forEach((page) => page.classList.toggle("is-active", page.id === tabId));
  refs.tabButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.tabTarget === tabId));
  if (tabId === "flightTab" && state.map) {
    setTimeout(() => state.map.invalidateSize(), 80);
  }
  if (tabId === "progressTab") renderProgressReport();
}

function privateJetUnlocked() {
  return state.qualifyingSessions >= 3;
}

function renderAirlineCards() {
  refs.airlineGrid.innerHTML = "";
  airlines.forEach((airline) => {
    const locked = airline.id === "private" && !privateJetUnlocked();
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = state.boarded || locked;
    button.className = `airline-card ${airline.id}${state.airline === airline.id ? " is-selected" : ""}${locked ? " is-locked" : ""}`;
    button.innerHTML = `<strong>${airline.name}</strong><span>${airline.detail}</span><small>${locked ? `${3 - state.qualifyingSessions} qualifying flights left` : airline.badge}</small>`;
    button.addEventListener("click", () => {
      if (state.boarded || locked) return;
      setAirline(airline.id);
      if (airline.id === "private") showTab("privateJetTab");
    });
    refs.airlineGrid.appendChild(button);
  });
  refs.privateUnlockLabel.textContent = privateJetUnlocked() ? "Private jet available" : `${state.qualifyingSessions}/3 two-hour flights`;
}

function setAirline(airlineId) {
  state.airline = airlineId;
  refs.shell.dataset.airline = airlineId;
  renderAirlineCards();
  renderPrivateJetTab();
  updateBoardingPass();
}

function setRoute(key, value) {
  if (state.boarded) return;
  state[key] = value;
  if (state.origin === state.destination) {
    const next = airports[(airports.findIndex((a) => a.code === value) + 1) % airports.length].code;
    if (key === "origin") {
      state.destination = next;
      refs.destinationSelect.value = next;
    } else {
      state.origin = next;
      refs.originSelect.value = next;
    }
  }
  resetTimer();
  recalculateFlight();
}

function renderDestinationCards() {
  refs.destinationGrid.innerHTML = "";
  airports
    .filter((item) => item.code !== state.origin)
    .forEach((item) => {
      const access = destinationAccess[item.code] || { tier: "Focus Route", unlocked: true };
      const button = document.createElement("button");
      button.type = "button";
      button.disabled = state.boarded || !access.unlocked;
      button.className = `destination-card${item.code === state.destination ? " is-selected" : ""}${access.unlocked ? "" : " is-locked"}`;
      const distance = haversineKm(airport(state.origin), item);
      const minutes = estimateFlightMinutes(distance);
      button.innerHTML = `<strong>${item.code}</strong><span>${item.city}, ${item.country}</span><small>${access.tier}</small><em class="time-chip">${formatMinutesLong(minutes)}</em>`;
      button.addEventListener("click", () => {
        if (state.boarded || !access.unlocked) return;
        state.destination = item.code;
        refs.destinationSelect.value = item.code;
        resetTimer();
        recalculateFlight();
        showTab("boardingTab");
      });
      refs.destinationGrid.appendChild(button);
    });
}

function renderPrivateJetTab() {
  const unlocked = privateJetUnlocked();
  refs.privateJetStatus.textContent = unlocked ? "Unlocked" : "Locked";
  refs.privateJetCopy.textContent = unlocked
    ? "Private jet mode is active. Choose any destination and the cabin switches to black and gold."
    : `Complete ${3 - state.qualifyingSessions} more focus flight${3 - state.qualifyingSessions === 1 ? "" : "s"} of 2 hours or more to unlock private jet routes.`;
  refs.privateDestinationGrid.innerHTML = "";
  airports
    .filter((item) => item.code !== state.origin)
    .forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.disabled = state.boarded || !unlocked;
      button.className = `destination-card${item.code === state.destination ? " is-selected" : ""}${unlocked ? "" : " is-locked"}`;
      const distance = haversineKm(airport(state.origin), item);
      const minutes = estimateFlightMinutes(distance);
      button.innerHTML = `<strong>${item.code}</strong><span>${item.city}, ${item.country}</span><small>Jet direct</small><em class="time-chip">${formatMinutesLong(minutes)}</em>`;
      button.addEventListener("click", () => {
        if (state.boarded || !unlocked) return;
        setAirline("private");
        state.destination = item.code;
        refs.destinationSelect.value = item.code;
        resetTimer();
        recalculateFlight();
        showTab("boardingTab");
      });
      refs.privateDestinationGrid.appendChild(button);
    });
}

function renderPurposeCards() {
  refs.purposeGrid.innerHTML = "";
  focusModes.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = state.boarded;
    button.className = `purpose-card${mode.id === state.focusMode ? " is-selected" : ""}`;
    button.innerHTML = `<strong>${mode.title}</strong><span>${mode.detail}</span>`;
    button.addEventListener("click", () => {
      if (state.boarded) return;
      state.focusMode = mode.id;
      state.seat = mode.seat;
      if (!state.focusLabel) refs.focusLabelInput.value = "";
      refs.seatSelect.value = mode.seat;
      renderPurposeCards();
      renderPreSeatMap();
      renderSeats();
      renderCabinDetails();
      updateBoardingPass();
    });
    refs.purposeGrid.appendChild(button);
  });
}

function renderPreSeatMap() {
  if (!refs.preSeatMap) return;
  refs.preSeatMap.innerHTML = "";
  refs.preBookedSeat.textContent = `Seat ${state.seat}`;
  seats.forEach((seat) => {
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = state.boarded;
    button.className = `pre-seat${seat === state.seat ? " is-selected" : ""}`;
    button.textContent = seat;
    button.addEventListener("click", () => {
      if (state.boarded) return;
      state.seat = seat;
      refs.seatSelect.value = seat;
      renderPreSeatMap();
      renderSeats();
      renderCabinDetails();
      updateBoardingPass();
    });
    refs.preSeatMap.appendChild(button);
  });
}

function renderSeats() {
  refs.seatMap.innerHTML = "";
  seats.forEach((seat) => {
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = state.boarded;
    button.className = `seat${seat === state.seat ? " is-booked" : ""}`;
    button.textContent = seat;
    button.addEventListener("click", () => {
      if (state.boarded) return;
      state.seat = seat;
      refs.seatSelect.value = seat;
      renderPreSeatMap();
      renderSeats();
      renderCabinDetails();
    });
    if (seat === state.seat) {
      const avatar = document.createElement("span");
      avatar.className = "avatar";
      avatar.textContent = avatars[state.avatar];
      button.appendChild(avatar);
    }
    refs.seatMap.appendChild(button);
  });
}

function initMap() {
  if (!window.L) return showFallbackRoute();
  state.map = L.map("map");
  const tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    maxZoom: 18,
    subdomains: "abcd",
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
  });
  let tileErrors = 0;
  tiles.on("tileerror", () => {
    tileErrors += 1;
    if (tileErrors >= 4) showFallbackRoute();
  });
  tiles.addTo(state.map);
}

function recalculateFlight() {
  const origin = airport(state.origin);
  const destination = airport(state.destination);
  const distanceKm = haversineKm(origin, destination);
  const minutes = estimateFlightMinutes(distanceKm);
  state.durationSeconds = minutes * 60;
  refs.distanceLabel.textContent = `Distance: ${Math.round(distanceKm).toLocaleString()} km`;
  refs.flightCode.textContent = `FF ${String(Math.round(distanceKm)).slice(0, 3).padEnd(3, "0")}`;
  refs.fallbackOrigin.textContent = origin.code;
  refs.fallbackDestination.textContent = destination.code;
  state.washroomBreakLimit = getWashroomBreakLimit(distanceKm);
  if (state.washroomBreaksUsed > state.washroomBreakLimit) state.washroomBreaksUsed = state.washroomBreakLimit;
  renderCabinDetails();
  renderDestinationCards();
  renderPrivateJetTab();
  updateBreakStatus();
  updateRouteTimeDetails(origin, destination, distanceKm, minutes);
  updateBoardingPass(distanceKm, minutes);
  drawRoute();
  updateTimer();
}

function updateRouteTimeDetails(origin, destination, distanceKm, minutes) {
  const totalLabel = formatMinutesLong(minutes);
  refs.routeTimeSummary.textContent = totalLabel;
  refs.routeDistanceSummary.textContent = `${Math.round(distanceKm).toLocaleString()} km estimated route`;
  refs.routeFromSummary.textContent = `${origin.city} (${origin.code})`;
  refs.routeToSummary.textContent = `${destination.city} (${destination.code})`;
  refs.routeFocusSummary.textContent = totalLabel;
  refs.liveRouteSummary.textContent = `${origin.code} -> ${destination.code}`;
  refs.liveTotalSummary.textContent = totalLabel;
}

function estimateFlightMinutes(distanceKm) {
  return Math.max(25, Math.round((distanceKm / 820) * 60 + (distanceKm < 650 ? 28 : 42)));
}

function drawRoute() {
  if (!state.map || !window.L) return showFallbackRoute();
  const origin = airport(state.origin);
  const destination = airport(state.destination);
  const points = [[origin.lat, origin.lng], [destination.lat, destination.lng]];
  if (state.routeLayer) state.routeLayer.remove();
  if (state.planeMarker) state.planeMarker.remove();
  const routeLine = L.polyline(points, { color: "#d6b92c", weight: 4, opacity: 0.8 });
  const originMarker = L.circleMarker(points[0], { radius: 7, color: "#102a64", fillColor: "#f0c532", fillOpacity: 1 }).bindTooltip(`${origin.city} (${origin.code})`);
  const destinationMarker = L.circleMarker(points[1], { radius: 7, color: "#102a64", fillColor: "#2f63dd", fillOpacity: 1 }).bindTooltip(`${destination.city} (${destination.code})`);
  state.routeLayer = L.featureGroup([routeLine, originMarker, destinationMarker]).addTo(state.map);
  state.planeMarker = L.marker(points[0], { icon: L.divIcon({ className: "leaflet-plane", html: "\u2708", iconSize: [28, 28], iconAnchor: [14, 14] }) }).addTo(state.map);
  state.map.fitBounds(state.routeLayer.getBounds(), { padding: [40, 40] });
}

function boardFlight() {
  if (!validateFocusLabel()) return false;
  state.boarded = true;
  state.sessionRecorded = false;
  refs.shell.classList.add("is-boarded");
  state.washroomBreaksUsed = 0;
  setControlsLocked(true);
  refs.flightStatus.textContent = "Boarded";
  updateBreakStatus();
  return true;
}

function validateFocusLabel() {
  state.focusLabel = refs.focusLabelInput.value.trim();
  if (state.focusLabel) return true;
  showTab("boardingTab");
  refs.focusLabelInput.focus();
  refs.focusLabelInput.placeholder = state.focusMode === "study" ? "Enter subject before boarding" : "Enter work name before boarding";
  return false;
}

function tearTicketAndBoard() {
  if (!validateFocusLabel()) return;
  const ticket = document.querySelector(".boarding-card");
  ticket.classList.remove("ticket-tear");
  void ticket.offsetWidth;
  ticket.classList.add("ticket-tear");
  setTimeout(() => {
    ticket.classList.remove("ticket-tear");
    if (!boardFlight()) return;
    showTab("flightTab");
    playFlightVideo("takeoff", () => {
      if (!state.running) toggleTimer();
    });
  }, 620);
}

function setControlsLocked(locked) {
  refs.originSelect.disabled = locked;
  refs.destinationSelect.disabled = locked;
  refs.seatSelect.disabled = locked;
  refs.avatarSelect.disabled = locked;
  $("swapButton").disabled = locked;
  $("homeHubButton").disabled = locked;
  $("manualRouteButton").disabled = locked;
  renderAirlineCards();
  renderDestinationCards();
  renderPrivateJetTab();
  renderPurposeCards();
  renderPreSeatMap();
  renderSeats();
}

function showFallbackRoute() {
  $("map").style.display = "none";
  refs.routeFallback.classList.add("is-visible");
}

function playFlightVideo(type, onDone) {
  const source = type === "landing" ? "assets/landing.mp4" : "assets/taking-off.mp4";
  refs.flightVideoLabel.textContent = type === "landing" ? "Landing" : "Taking off";
  refs.flightVideo.src = source;
  refs.flightVideoOverlay.classList.add("is-visible");
  refs.flightVideo.currentTime = 0;
  const finish = () => {
    refs.flightVideo.pause();
    refs.flightVideoOverlay.classList.remove("is-visible");
    refs.flightVideo.removeEventListener("ended", finish);
    onDone?.();
  };
  refs.flightVideo.addEventListener("ended", finish);
  refs.flightVideo.play().catch(() => {
    setTimeout(finish, 2200);
  });
}

function toggleTimer() {
  if (state.washroomActive) return;
  if (!state.running && !state.boarded) boardFlight();
  state.running = !state.running;
  if (state.running) {
    state.startedAt = Date.now();
    refs.pauseButton.textContent = "Pause";
    refs.flightStatus.textContent = "In Focus Flight";
    state.tickId = window.setInterval(updateTimer, 100);
    requestWakeLock();
  } else {
    state.elapsedBeforePause = getElapsedSeconds();
    refs.pauseButton.textContent = "Resume";
    refs.flightStatus.textContent = "Holding";
    window.clearInterval(state.tickId);
    releaseWakeLock();
  }
  updateTimer();
}

function resetTimer() {
  recordFocusSession("ended");
  state.running = false;
  state.boarded = false;
  refs.shell.classList.remove("is-boarded");
  state.washroomActive = false;
  state.washroomRemaining = 0;
  state.wasRunningBeforeBreak = false;
  state.elapsedBeforePause = 0;
  state.startedAt = 0;
  refs.pauseButton.textContent = "Start";
  refs.flightStatus.textContent = "Boarding";
  window.clearInterval(state.tickId);
  window.clearInterval(state.washroomTimer);
  releaseWakeLock();
  setControlsLocked(false);
  updateBreakStatus();
  updateTimer();
}

function updateTimer() {
  const elapsed = Math.min(getElapsedSeconds(), state.durationSeconds);
  const remaining = Math.max(0, state.durationSeconds - elapsed);
  const progress = state.durationSeconds ? elapsed / state.durationSeconds : 0;
  refs.timerDisplay.textContent = formatTime(remaining);
  refs.progressFill.style.width = `${progress * 100}%`;
  refs.progressPlane.style.left = `${progress * 100}%`;
  refs.etaLabel.textContent = `ETA: ${formatEta(remaining)}`;
  refs.phaseLabel.textContent = `Phase: ${phase(progress)}`;
  refs.liveProgressSummary.textContent = `${Math.round(progress * 100)}%`;
  updateCabinAudio(progress);
  if (state.planeMarker) {
    const origin = airport(state.origin);
    const destination = airport(state.destination);
    state.planeMarker.setLatLng([origin.lat + (destination.lat - origin.lat) * progress, origin.lng + (destination.lng - origin.lng) * progress]);
  }
  if (elapsed >= state.durationSeconds && state.running) {
    state.running = false;
    refs.pauseButton.textContent = "Complete";
    refs.flightStatus.textContent = "Landed";
    window.clearInterval(state.tickId);
    releaseWakeLock();
    playFlightVideo("landing", completeFlight);
  }
}

function completeFlight() {
  recordFocusSession("completed");
  if (state.durationSeconds >= 7200 && state.boarded) {
    state.qualifyingSessions += 1;
    localStorage.setItem("focusFlightTwoHourSessions", String(state.qualifyingSessions));
    renderAirlineCards();
    renderPrivateJetTab();
  }
  state.boarded = false;
  refs.shell.classList.remove("is-boarded");
  setControlsLocked(false);
}

function recordFocusSession(status) {
  if (!state.boarded || state.sessionRecorded) return;
  const elapsedSeconds = status === "completed" ? state.durationSeconds : Math.min(getElapsedSeconds(), state.durationSeconds);
  if (elapsedSeconds < 60) return;
  const origin = airport(state.origin);
  const destination = airport(state.destination);
  const sessions = getFocusSessions();
  sessions.push({
    id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()),
    date: new Date().toISOString(),
    status,
    mode: state.focusMode,
    label: state.focusLabel || (state.focusMode === "study" ? "Untitled subject" : "Untitled work"),
    seconds: elapsedSeconds,
    plannedSeconds: state.durationSeconds,
    route: `${origin.code}-${destination.code}`,
    origin: origin.code,
    destination: destination.code,
  });
  localStorage.setItem("focusFlightSessions", JSON.stringify(sessions.slice(-300)));
  state.sessionRecorded = true;
}

function getFocusSessions() {
  try {
    return JSON.parse(localStorage.getItem("focusFlightSessions") || "[]");
  } catch {
    return [];
  }
}

function getElapsedSeconds() {
  return state.running ? state.elapsedBeforePause + Math.floor((Date.now() - state.startedAt) / 1000) : state.elapsedBeforePause;
}
function airport(code) { return airports.find((a) => a.code === code); }
function toRad(value) { return value * Math.PI / 180; }
function haversineKm(a, b) {
  const x = Math.sin(toRad(b.lat - a.lat) / 2) ** 2 + Math.sin(toRad(b.lng - a.lng) / 2) ** 2 * Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat));
  return 12742 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}
function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
function formatEta(seconds) {
  const minutes = Math.ceil(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return hours > 0 ? `${hours}h ${minutes % 60}m` : `${minutes}m`;
}
function formatMinutesLong(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours > 0 && rest > 0) return `${hours}h ${rest}m`;
  if (hours > 0) return `${hours}h`;
  return `${minutes} min`;
}
function pad(value) { return String(value).padStart(2, "0"); }
function phase(progress) {
  if (progress <= 0) return "Boarding";
  if (progress < 0.16) return "Takeoff";
  if (progress < 0.82) return "Cruise focus";
  if (progress < 1) return "Approach";
  return "Landed";
}
function renderCabinDetails() {
  refs.bookedSeat.textContent = state.seat;
  if (refs.preBookedSeat) refs.preBookedSeat.textContent = `Seat ${state.seat}`;
  if (refs.passSeat) refs.passSeat.textContent = state.seat;
}
function updateBoardingPass(distanceKm, minutes) {
  const origin = airport(state.origin);
  const destination = airport(state.destination);
  const routeDistance = distanceKm || haversineKm(origin, destination);
  const durationMinutes = minutes || Math.round(state.durationSeconds / 60);
  const mode = focusModes.find((item) => item.id === state.focusMode) || focusModes[1];
  const gate = `${destination.code.charCodeAt(0) % 4 + 1}${state.seat.slice(0, 1)}`;
  const now = new Date();
  const boarding = new Date(now.getTime() + 8 * 60000);
  const takeoff = new Date(now.getTime() + 18 * 60000);
  const access = destinationAccess[destination.code] || { tier: "Focus Route" };

  refs.passRoute.textContent = `${origin.code} -> ${destination.code}`;
  refs.passCities.textContent = `${origin.city} to ${destination.city}`;
  refs.passMode.textContent = mode.title;
  refs.passDuration.textContent = `${durationMinutes} min`;
  refs.passDistance.textContent = `${Math.round(routeDistance).toLocaleString()} km`;
  refs.passFlight.textContent = `Flight ${refs.flightCode.textContent}`;
  refs.passBoarding.textContent = formatClock(boarding);
  refs.passTakeoff.textContent = formatClock(takeoff);
  refs.passSeat.textContent = state.seat;
  refs.passGate.textContent = gate;
  refs.focusLabelPrompt.textContent = state.focusMode === "study" ? "Subject" : state.focusMode === "work" ? "Work name" : "Project";
  refs.focusLabelInput.placeholder = state.focusMode === "study" ? "Math, physics, history..." : state.focusMode === "work" ? "Client task, coding, planning..." : "Sketching, writing, design...";
  refs.routeTier.textContent = access.tier;
  refs.recommendedMinutes.textContent = `${durationMinutes} min`;
  refs.routeNote.textContent = routeDistance > 6500 ? "Long-haul focus route with a calmer cruise phase." : "Recommended from your selected route.";
  refs.routeProgressFill.style.width = `${Math.min(100, (state.qualifyingSessions / 3) * 100)}%`;
  refs.sessionsLabel.textContent = `Completed ${state.qualifyingSessions} two-hour focus flight${state.qualifyingSessions === 1 ? "" : "s"}`;
  refs.unlockLabel.textContent = privateJetUnlocked() ? "Private jet routes unlocked" : `${3 - state.qualifyingSessions} more unlock private jet routes`;
  refs.levelPill.textContent = routeDistance > 3000 ? "Runway Level 2" : "Runway Level 1";
}
function formatClock(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function renderProgressReport() {
  const sessions = getFocusSessions();
  const now = new Date();
  const sunday = new Date(now);
  sunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
  sunday.setHours(23, 59, 59, 999);
  const weekStart = new Date(sunday);
  weekStart.setDate(sunday.getDate() - 6);
  weekStart.setHours(0, 0, 0, 0);
  const previousStart = new Date(weekStart);
  previousStart.setDate(weekStart.getDate() - 7);
  const previousEnd = new Date(weekStart);
  previousEnd.setMilliseconds(-1);
  const weekSessions = sessions.filter((item) => {
    const date = new Date(item.date);
    return date >= weekStart && date <= sunday;
  });
  const previousSessions = sessions.filter((item) => {
    const date = new Date(item.date);
    return date >= previousStart && date <= previousEnd;
  });
  const totals = groupByLabel(weekSessions);
  const previousTotals = groupByLabel(previousSessions);
  const totalSeconds = weekSessions.reduce((sum, item) => sum + item.seconds, 0);
  const best = totals[0];
  const maxSeconds = Math.max(1, ...totals.map((item) => item.seconds));

  refs.weekRangeLabel.textContent = `Week ending Sunday ${sunday.toLocaleDateString()}`;
  refs.progressSummary.innerHTML = `
    <div><span>Total focus</span><strong>${formatMinutesLong(Math.round(totalSeconds / 60))}</strong></div>
    <div><span>Sessions</span><strong>${weekSessions.length}</strong></div>
    <div><span>Best area</span><strong>${best ? best.label : "--"}</strong></div>
  `;
  refs.progressGraph.innerHTML = totals.length
    ? totals.map((item) => `<div class="graph-row"><b>${item.label}</b><div class="graph-track"><div class="graph-fill" style="width:${Math.max(6, item.seconds / maxSeconds * 100)}%"></div></div><span>${formatMinutesLong(Math.round(item.seconds / 60))}</span></div>`).join("")
    : `<p class="welcome-copy">No recorded focus flights this week yet. Board a flight and focus for at least one minute to begin tracking.</p>`;

  const improved = totals
    .map((item) => ({ ...item, delta: item.seconds - (previousTotals.find((old) => old.label === item.label)?.seconds || 0) }))
    .sort((a, b) => b.delta - a.delta)[0];
  const attention = totals.length > 1 ? totals[totals.length - 1] : null;
  refs.improvedInsight.textContent = improved && improved.delta > 0 ? `${improved.label} +${formatMinutesLong(Math.round(improved.delta / 60))}` : "Build a second week to compare";
  refs.attentionInsight.textContent = attention ? `${attention.label} needs more time` : "Add more subjects/work";
  refs.acedInsight.textContent = best ? `${best.label} (${formatMinutesLong(Math.round(best.seconds / 60))})` : "--";
}

function groupByLabel(sessions) {
  const grouped = new Map();
  sessions.forEach((item) => {
    const key = `${item.mode}: ${item.label}`;
    grouped.set(key, (grouped.get(key) || 0) + item.seconds);
  });
  return Array.from(grouped, ([label, seconds]) => ({ label, seconds })).sort((a, b) => b.seconds - a.seconds);
}
function toggleTheme() {
  const light = refs.shell.dataset.theme === "light";
  refs.shell.dataset.theme = light ? "dark" : "light";
  $("themeButton").textContent = light ? "Light" : "Dark";
}
function toggleMap() {
  refs.shell.classList.toggle("map-hidden");
  refs.mapButton.textContent = refs.shell.classList.contains("map-hidden") ? "Show Map" : "Hide Map";
  if (state.map) setTimeout(() => state.map.invalidateSize(), 80);
}
function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
}
function toggleCabinAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!state.audio) state.audio = createCabinAudio(new AudioContext());
  state.audio.ctx.resume?.();
  state.audioOn = !state.audioOn;
  refs.audioButton.textContent = state.audioOn ? "Mute" : "Audio";
  state.audio.master.gain.setTargetAtTime(state.audioOn ? 0.45 : 0.0001, state.audio.ctx.currentTime, 0.35);
  updateCabinAudio(currentProgress());
}

function createCabinAudio(ctx) {
  const master = ctx.createGain();
  const noiseGain = ctx.createGain();
  const rumbleGain = ctx.createGain();
  const airGain = ctx.createGain();
  const landingGain = ctx.createGain();
  const lowpass = ctx.createBiquadFilter();
  const highpass = ctx.createBiquadFilter();
  const rumble = ctx.createOscillator();
  const air = ctx.createOscillator();
  const landing = ctx.createOscillator();

  master.gain.value = 0.0001;
  noiseGain.gain.value = 0.28;
  rumbleGain.gain.value = 0.1;
  airGain.gain.value = 0.05;
  landingGain.gain.value = 0;
  lowpass.type = "lowpass";
  lowpass.frequency.value = 850;
  lowpass.Q.value = 0.7;
  highpass.type = "highpass";
  highpass.frequency.value = 80;

  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx);
  noise.loop = true;
  noise.connect(highpass).connect(lowpass).connect(noiseGain).connect(master);

  rumble.type = "sawtooth";
  rumble.frequency.value = 62;
  rumble.connect(rumbleGain).connect(master);

  air.type = "sine";
  air.frequency.value = 180;
  air.connect(airGain).connect(master);

  landing.type = "triangle";
  landing.frequency.value = 118;
  landing.connect(landingGain).connect(master);

  master.connect(ctx.destination);
  noise.start();
  rumble.start();
  air.start();
  landing.start();

  return { ctx, master, noiseGain, rumbleGain, airGain, landingGain, lowpass, rumble, air, landing };
}

function createNoiseBuffer(ctx) {
  const durationSeconds = 2;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * durationSeconds, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = last * 0.82 + white * 0.18;
    data[i] = last;
  }
  return buffer;
}

function currentProgress() {
  return state.durationSeconds ? Math.min(getElapsedSeconds(), state.durationSeconds) / state.durationSeconds : 0;
}

async function requestWakeLock() {
  if (!("wakeLock" in navigator)) {
    updateWakeStatus("Screen awake: unsupported");
    return;
  }
  try {
    if (!state.wakeLock) {
      state.wakeLock = await navigator.wakeLock.request("screen");
      state.wakeLock.addEventListener("release", () => {
        state.wakeLock = null;
        if (!state.running) updateWakeStatus("Screen awake: off");
      });
    }
    updateWakeStatus("Screen awake: on");
  } catch (error) {
    updateWakeStatus("Screen awake: unavailable");
  }
}

async function releaseWakeLock() {
  if (!state.wakeLock) {
    updateWakeStatus("Screen awake: off");
    return;
  }
  const lock = state.wakeLock;
  state.wakeLock = null;
  await lock.release();
  updateWakeStatus("Screen awake: off");
}

function updateWakeStatus(message) {
  if (refs.wakeStatus) refs.wakeStatus.textContent = message;
}

function getWashroomBreakLimit(distanceKm) {
  if (distanceKm < 900) return 1;
  if (distanceKm < 3500) return 2;
  if (distanceKm < 7500) return 3;
  return 4;
}

function startWashroomBreak() {
  if (!state.boarded || state.washroomActive || state.washroomBreaksUsed >= state.washroomBreakLimit) return;
  state.washroomBreaksUsed += 1;
  state.washroomActive = true;
  state.washroomRemaining = 60;
  state.wasRunningBeforeBreak = state.running;
  if (state.running) {
    state.elapsedBeforePause = getElapsedSeconds();
    state.running = false;
    state.startedAt = 0;
    window.clearInterval(state.tickId);
    releaseWakeLock();
    refs.pauseButton.textContent = "Resume";
    refs.flightStatus.textContent = "Washroom break";
  }
  updateBreakStatus();
  window.clearInterval(state.washroomTimer);
  state.washroomTimer = window.setInterval(() => {
    state.washroomRemaining -= 1;
    updateBreakStatus();
    if (state.washroomRemaining <= 0) endWashroomBreak();
  }, 1000);
}

function endWashroomBreak() {
  window.clearInterval(state.washroomTimer);
  state.washroomActive = false;
  state.washroomRemaining = 0;
  if (state.wasRunningBeforeBreak && state.boarded) {
    state.running = true;
    state.startedAt = Date.now();
    refs.pauseButton.textContent = "Pause";
    refs.flightStatus.textContent = "In Focus Flight";
    window.clearInterval(state.tickId);
    state.tickId = window.setInterval(updateTimer, 100);
    requestWakeLock();
  }
  state.wasRunningBeforeBreak = false;
  updateBreakStatus();
  updateTimer();
}

function updateBreakStatus() {
  if (!refs.washroomButton) return;
  refs.washroomButton.disabled = !state.boarded || state.washroomActive || state.washroomBreaksUsed >= state.washroomBreakLimit;
  if (!state.boarded) {
    refs.breakStatus.textContent = "Available after boarding";
  } else if (state.washroomActive) {
    refs.breakStatus.textContent = `Timer paused: ${state.washroomRemaining}s remaining`;
  } else {
    refs.breakStatus.textContent = `${Math.max(0, state.washroomBreakLimit - state.washroomBreaksUsed)} of ${state.washroomBreakLimit} breaks left`;
  }
}

function updateCabinAudio(progress) {
  if (!state.audio || !state.audioOn) return;
  const audio = state.audio;
  const now = audio.ctx.currentTime;
  const takeoff = progress < 0.16;
  const approach = progress >= 0.82 && progress < 1;
  const cruise = !takeoff && !approach && progress < 1;

  audio.noiseGain.gain.setTargetAtTime(takeoff ? 0.48 : approach ? 0.34 : cruise ? 0.24 : 0.14, now, 0.6);
  audio.rumbleGain.gain.setTargetAtTime(takeoff ? 0.24 : approach ? 0.15 : cruise ? 0.08 : 0.02, now, 0.7);
  audio.airGain.gain.setTargetAtTime(cruise ? 0.09 : 0.05, now, 0.8);
  audio.landingGain.gain.setTargetAtTime(approach ? 0.08 : 0.0001, now, 0.7);
  audio.lowpass.frequency.setTargetAtTime(takeoff ? 560 : approach ? 720 : 1150, now, 0.8);
  audio.rumble.frequency.setTargetAtTime(takeoff ? 74 : approach ? 55 : 47, now, 0.7);
  audio.air.frequency.setTargetAtTime(cruise ? 210 : 170, now, 0.8);
  audio.landing.frequency.setTargetAtTime(approach ? 96 : 118, now, 0.8);
}
