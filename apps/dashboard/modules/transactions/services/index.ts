export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const updateTransaction = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      id: string;
      transactionType: string;
      value: number;
      operationType: string;
    };
  },
) => {
  await fetch(`${url}/${arg.id}`, {
    method: "PUT",
    body: JSON.stringify(arg),
  });
};

export const deleteTransaction = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      id: string;
    };
  },
) => {
  await fetch(`${url}/${arg.id}`, {
    method: "DELETE",
  });
};
