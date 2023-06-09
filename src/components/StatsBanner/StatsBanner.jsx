import React from "react";
import "./StatsBanner.css";
import {
  UilClipboardAlt,
  UilStore,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";
import CardChart from "../Card/CardChart";
import { useContext } from "react";
import { StoreContext } from "~store";
import {
  useGetStatsCertificates,
  useGetStatsPlans,
  useGetStatsUsers,
} from "../../hooks/Stats/Stats";
import { useEffect } from "react";
const StatsBanner = () => {
  const [state] = useContext(StoreContext);
  const { dataStatsUsers, errorStatsUsers } = useGetStatsUsers(
    state.id,
    state.token
  );
  const { dataStatsPlans, errorStatsPlans } = useGetStatsPlans(
    state.id,
    state.token
  );
  const { dataStatsCertificates, errorStatsCertificates } =
    useGetStatsCertificates(state.id, state.token);
  let arrayDataUsers = [];
  let arrayDateUsers = [];
  let arrayDataCertificates = [];
  let arrayDateCertificates = [];
  let arrayDataPlans = [];
  let arrayDatePlans = [];
  useEffect(() => {
    if (
      dataStatsUsers &&
      Array.isArray(dataStatsUsers) &&
      dataStatsUsers.length > 0
    ) {
      for (let i = 0; i < dataStatsUsers.length; i++) {
        let data = dataStatsUsers[i].value;
        let date = dataStatsUsers[i].date;
        arrayDataUsers.push(data);
        arrayDateUsers.push(date);
      }
    }
    if (
      dataStatsPlans &&
      Array.isArray(dataStatsPlans) &&
      dataStatsPlans.length > 0
    ) {
      for (let i = 0; i < dataStatsPlans.length; i++) {
        let data = dataStatsPlans[i].value;
        let date = dataStatsPlans[i].date;
        arrayDataPlans.push(data);
        arrayDatePlans.push(date);
      }
    }
    if (
      dataStatsCertificates &&
      Array.isArray(dataStatsCertificates) &&
      dataStatsCertificates.length > 0
    ) {
      for (let i = 0; i < dataStatsCertificates.length; i++) {
        let data = dataStatsCertificates[i].value;
        let date = dataStatsCertificates[i].date;
        arrayDataCertificates.push(data);
        arrayDateCertificates.push(date);
      }
    }
  }, [dataStatsCertificates, dataStatsPlans, dataStatsUsers]);

  const cardsData = [
    {
      title: "New Stores",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilStore,
      series: [
        {
          name: "New Stores",
          data: arrayDataUsers,
        },
      ],
      categories: arrayDateUsers,
    },
    {
      title: "Certificated",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Certificated",
          data: arrayDataCertificates,
        },
      ],
      categories: arrayDateCertificates,
    },
    {
      title: "Plan Created",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 50,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Plan Created",
          data: arrayDataPlans,
        },
      ],
      categories: arrayDatePlans,
    },
  ];

  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <CardChart
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              categories={card.categories}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StatsBanner;
