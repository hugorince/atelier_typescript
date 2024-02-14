import classes from "./data-card.module.css";

export const DataCard = ({ data }) => {
  return (
    <div className={classes.dataCardWrapper}>
      <h3>ton nom : {data.name}</h3>
      <span>ton age : {data.age} ans</span>
      <span>nombre de requêtes : {data.count}</span>
    </div>
  );
};
