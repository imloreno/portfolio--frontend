export type Work = {
  title: string;
  img: string;
  description: string;
  tasks: string[];
  reference: { type: string; url: string }[] | any;
};
