function generateTicket() {
  let name = document.getElementById("name").value;
  let route = document.getElementById("route").value;
  let date = document.getElementById("date").value;
  let price = document.getElementById("price").value;

  let ticketNumber = Math.floor(Math.random() * 100000);

  let ticket = `
  ITIKE YA HORIZON EXPRESS
  -----------------------
  Ticket No: ${ticketNumber}
  Izina: ${name}
  Route: ${route}
  Itariki: ${date}
  Igiciro: ${price} RWF

  `;

  document.getElementById("ticket").innerText = ticket;

  // Kubika itike
  localStorage.setItem(ticketNumber, ticket);
}
