import { useMutation } from "@tanstack/react-query";
import formSubmitAction from "./form-submit-action";

export const useFormSubmitAction = () => {
  return useMutation({
    mutationFn: formSubmitAction,
    mutationKey: ["formSubmit"],
  });
};

