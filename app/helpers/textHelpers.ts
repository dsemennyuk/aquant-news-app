export const truncDescriptionText = (text: string) => {
    if (text.length < 80) {
      return text;
    } else {
      return `${text.substring(0, 77)}...`;
    }
  };