export type updateUserInputsType = {
  name: string;
  phone: string;
};

export const updateUser = async (
  updateUserData: updateUserInputsType
): Promise<number> => {
  const response = await fetch("/api/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUserData),
  });

  return response.status;
};
