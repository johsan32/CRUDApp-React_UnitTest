import { render, screen, waitFor } from "@testing-library/react";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";

test("Form Gönderilince Kullanıcı fonksiyonu doğru paramterleri alarak çalışıyor ", async () => {
  const mock = jest.fn();
  render(<UserForm addUser={mock} />);
  const nameInput = screen.getByLabelText("Kullanıcı Adı");
  const emailInput = screen.getByLabelText("Mail Adresi");
  const submitBtn = screen.getByRole("button");

  user.click(nameInput);

  user.keyboard("Hasan");
  user.type(emailInput, "hsnulusoy32@gmail.com");
  user.click(submitBtn);

  expect(mock).toBeCalled();
  expect(mock).toBeCalledWith({
    name: "Hasan",
    email: "hsnulusoy32@gmail.com",
  });

  await waitFor(() => expect(nameInput).toHaveValue(""));
  await waitFor(() => expect(emailInput).toHaveValue(""));
});
