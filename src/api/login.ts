export const login = () => {
  return new Promise<void>((resolve, reject) => {
    const isSuccess = Math.random() > 0.3;

    setTimeout(() => {
      if (isSuccess) {
        resolve();
        return;
      }
      reject('Не удалось войти, попробуйте еще раз');
    }, Math.random() * 2000);
  });
};
