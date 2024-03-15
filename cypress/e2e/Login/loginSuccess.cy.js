describe("Login Test", () => {
  it("Login to the Katalon Demo Cura website", function () {
    //Buka Halaman Login
    cy.visit("https://katalon-demo-cura.herokuapp.com");
    // Click Make Appointment
    cy.get("#btn-make-appointment").click();
    // Isi formulir login
    cy.get('input[name="username"]').type("John Doe");
    cy.get('input[name="password"]').type("ThisIsNotAPassword");
    // Klik tombol login
    cy.get('button[type="submit"]').click();
    // Periksa login berhasil
    cy.url().should("include", "#appointment");
    cy.get("h2").should("contain", "Make Appointment");
  });
});
