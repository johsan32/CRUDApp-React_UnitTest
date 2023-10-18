import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const users = [
  { name: "Hasan", email: "hasanulusoy78@hotmail.com" },
  { name: "Ulusoy", email: "hsnulusoy32@gmail.com" },
];

test("Her Kullanıcı İçin Ekrana Bir Tablo Satırı Basar", () => {
  render(<UserList users={users} />);

  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(rows).toHaveLength(users.length);
});

test("Her bir kullanıcı için isim ver email değeri gözükür", () => {
  render(<UserList users={users} />);

  for (const user of users) {
    const nameCell = screen.getByText(user.name);
    expect(nameCell).toBeInTheDocument();

    const emailCell = screen.getByText(user.email);
    expect(emailCell).toBeInTheDocument();
  }
});
