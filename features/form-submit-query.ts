import { useMutation } from "@tanstack/react-query";

async function formSubmitAction(formData: FormData) {
  const res = await fetch("/api/contact", { method: "POST", body: formData });
  if (!res.ok) throw new Error("Failed to submit form");
}

export const useFormSubmitAction = () => {
  return useMutation({
    mutationFn: formSubmitAction,
    mutationKey: ["formSubmit"],
  });
};
