import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test(" header başlıklar ekrana basılır", () => {
  render(<App />);

  const head = screen.getByText(/CRUD App/i);
  const nav = screen.getByText(/Unit Test/i);
  expect(head).toBeInTheDocument();
  expect(nav).toBeInTheDocument();
});
test("Uygulama Doğru Şekilde Çalışıyormu?", async () => {
  render(<App />);
  const nameInput = screen.getByLabelText("Kullanıcı Adı");
  const mailInput = screen.getByLabelText("Mail Adresi");
  const submitButton = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("React");
  user.type(mailInput, "react@gmail.com");
  user.click(submitButton);

  await screen.findByRole("cell", { name: "React" });
  await screen.findByRole("cell", { name: "react@gmail.com" });
});
