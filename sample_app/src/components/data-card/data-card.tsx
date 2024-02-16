import classes from "./data-card.module.css";
import { capitalize } from "@/utils";

export type Data = {
  name: string;
  age: number;
  count: number;
};
interface DataCardProps {
  data: Data;
}

export const DataCard = ({ data }: DataCardProps) => {
  return (
    <div className={classes.dataCardWrapper}>
      <h3>{capitalize(data.name)}</h3>
      <p>
        Tu as <strong>{data.age} ans</strong>
      </p>
      <p>Nombre de requêtes : {data.count}</p>
    </div>
  );
};
