import React, { useEffect, useState } from "react";
import {
  ListIcon,
  ListSuccessIcon,
  ListSuccessMuteIcon,
  PlusIcon,
} from "../../assets/icon";
import styles from "./search.module.css";
import { workersApi } from "../../hook/Api";
export default function Search() {
  let [islistItem, setIsListItem] = useState();
  let [form, setForm] = useState();
  let [workerResult, setWorkerResult] = useState();
  let [list, setList] = useState([
    {
      id: 0,
      title: "Qayerga",
      value: null,
      data: [
        {
          id: 0,
          title: "Bodomzor metro",
          drop: "Toshkent shahar, Yunusobod tumani",
          geolocation: {
            longitude: 69.2301,
            latitude: 41.2895,
          },
        },
        {
          id: 1,
          title: "Chilonzor metro",
          drop: "Toshkent shahar, Yunusobod tumani ",
          geolocation: {
            longitude: 69.2411,
            latitude: 41.2915,
          },
        },
        {
          id: 2,
          title: "Akisher Navoiy metro",
          drop: "Toshkent shahar, Yunusobod tumani ",
          geolocation: {
            longitude: 69.2451,
            latitude: 41.2955,
          },
        },
      ],
      drop: function () {
        return this.data?.map((item, index) => (
          <li
            className="p-3 d-flex justify-content-between border-bottom"
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => {
              setIsListItem(false);
              setList((initialState) =>
                initialState?.map((parent) => {
                  if (0 === parent.id) {
                    let data = parent?.data?.map((data, dataIndex) => {
                      setForm((initialState) => {
                        return {
                          ...initialState,
                          Qayerga: {
                            title: item?.title,
                            geolocation: data?.geolocation,
                          },
                        };
                      });
                      if (dataIndex === index) {
                        return { ...data, active: true };
                      } else {
                        return { ...data, active: false };
                      }
                    });
                    return {
                      ...parent,
                      value: { title: item?.title, body: item?.drop },
                      data,
                      active: false,
                    };
                  } else {
                    return parent;
                  }
                })
              );
            }}
          >
            <div className="col">
              <div>{item?.title}</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(0,0,0,0.4)" }}>
                {item?.drop}
              </div>
            </div>
            {item?.active ? <ListSuccessIcon /> : <ListSuccessMuteIcon />}
          </li>
        ));
      },
    },
    {
      id: 1,
      title: "Jinsi",
      value: null,
      data: [
        { id: 0, title: "Erkak", active: false },
        { id: 1, title: "Ayol", active: false },
      ],
      drop: function () {
        return (
          <li
            className="p-3 d-flex justify-content-between border-bottom"
            style={{ cursor: "pointer" }}
          >
            {this?.data?.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center gap-1"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="radio"
                  name="sex"
                  id={item?.title === "Erkak" ? "male" : "fimale"}
                  onClick={() => {
                    setIsListItem(false);
                    setList((initialState) =>
                      initialState?.map((parent) => {
                        if (1 === parent?.id) {
                          let value = null;
                          let data = parent?.data?.map((data) => {
                            if (data?.id === item?.id) {
                              setForm((initialState) => {
                                return { ...initialState, Jinsi: data?.title };
                              });
                              value = data?.title;
                              return { ...data, active: true };
                            } else {
                              return { ...data, active: false };
                            }
                          });
                          return {
                            ...parent,
                            value: { title: value },
                            data,
                            active: false,
                          };
                        } else {
                          return parent;
                        }
                      })
                    );
                  }}
                />
                <label
                  htmlFor={item?.title === "Erkak" ? "male" : "fimale"}
                  className="d-flex align-items-center gap-1"
                  style={{ cursor: "pointer" }}
                >
                  {item?.active ? <ListSuccessIcon /> : <ListSuccessMuteIcon />}
                  {item?.title}
                </label>
              </div>
            ))}
          </li>
        );
      },
    },
    {
      id: 2,
      title: "Nechta odam kerak",
      value: null,
      data: 1,
      drop: function () {
        return (
          <li
            className="p-3 d-flex justify-content-between  border-bottom"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center gap-2">
              <button
                className="d-flex align-items-center justify-content-center rounded-3 card px-2"
                onClick={() => {
                  if (this.data !== 1) {
                    setList((initialState) =>
                      initialState?.map((parent) => {
                        if (2 === parent?.id) {
                          return { ...parent, data: this.data-- };
                        } else {
                          return parent;
                        }
                      })
                    );
                  }
                }}
              >
                -
              </button>
              <div>{this.data}</div>
              <button
                className="d-flex align-items-center justify-content-center rounded-3 card px-2"
                onClick={() => {
                  if (this.data !== 0) {
                    setList((initialState) =>
                      initialState?.map((parent) => {
                        if (2 === parent?.id) {
                          return { ...parent, data: this.data++ };
                        } else {
                          return parent;
                        }
                      })
                    );
                  }
                }}
              >
                +
              </button>
            </div>
            <button
              className="d-flex align-items-center justify-content-center rounded-3 card px-2"
              onClick={() => {
                setIsListItem(false);
                setList((initialState) =>
                  initialState?.map((parent) => {
                    if (2 === parent?.id) {
                      setForm((initialState) => {
                        return {
                          ...initialState,
                          "Nechta odam kerak": this.data,
                        };
                      });
                      return {
                        ...parent,
                        value: { title: this.data },
                        active: false,
                      };
                    } else {
                      return parent;
                    }
                  })
                );
              }}
            >
              Saqlash
            </button>
          </li>
        );
      },
    },
    {
      id: 3,
      title: "Qanaqa ish",
      value: null,
      data: [
        { id: 0, title: "Uy ishlari" },
        { id: 1, title: "Yuk tashish" },
        { id: 2, title: "Uborka" },
        { id: 3, title: "Qazish ishlari" },
        { id: 4, title: "Yer Chopish" },
      ],
      drop: function () {
        return this.data?.map((item, index) => (
          <li
            className="p-3 d-flex justify-content-between border-bottom"
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => {
              setIsListItem(false);
              setList((initialState) =>
                initialState?.map((parent) => {
                  if (3 === parent.id) {
                    let data = parent?.data?.map((data, dataIndex) => {
                      if (dataIndex === index) {
                        return { ...data, active: true };
                      } else {
                        return { ...data, active: false };
                      }
                    });
                    setForm((initialState) => {
                      return { ...initialState, "Qanaqa ish": item?.title };
                    });
                    return {
                      ...parent,
                      value: { title: item?.title },
                      data,
                      active: false,
                    };
                  } else {
                    return parent;
                  }
                })
              );
            }}
          >
            <div>{item?.title}</div>
            {item?.active ? <ListSuccessIcon /> : <ListSuccessMuteIcon />}
          </li>
        ));
      },
    },
    {
      id: 4,
      title: "Qachon",
      value: null,
      data: (function () {
        let date = new Date();
        let year = date.getFullYear();
        let day = Number(date.getDate());
        let month = Number(date.getMonth()) + 1;
        let hour = Number(date.getHours());
        let minut = Number(date.getMinutes());
        return { year, month, day, hour, minut };
      })(),
      drop: function () {
        return (
          <li className="p-3" style={{ cursor: "pointer" }}>
            <div className="row border-bottom">
              <div className="col-6 d-flex flex-column align-items-center border-end">
                <input
                  type="date"
                  style={{ width: "100%" }}
                  defaultValue={`${this.data.year}-${
                    this.data.month < 10
                      ? `0${this.data.month}`
                      : this.data.month
                  }-${
                    this.data.day < 10 ? `0${this.data.day}` : this.data.day
                  }`}
                  min={`${this.data.year}-${
                    this.data.month < 10
                      ? `0${this.data.month}`
                      : this.data.month
                  }-${
                    this.data.day < 10 ? `0${this.data.day}` : this.data.day
                  }`}
                />
                <div className="h5">{`${
                  this.data.hour < 10 ? `0${this.data.hour}` : this.data.hour
                }:${
                  this.data.minut < 10 ? `0${this.data.minut}` : this.data.minut
                }`}</div>
              </div>
              <div className="col-6"></div>
            </div>
            <div className="row">
              <div className="col-6 border-end p-1">
                <div className="col d-flex flex-column align-items-center">
                  <button
                    className="d-flex align-items-center justify-content-center rounded-3 card px-2"
                    onClick={() => {
                      setList((initialState) =>
                        initialState?.map((parent) => {
                          if (4 === parent.id && parent.data.hour !== 1) {
                            let data = {
                              ...parent.data,
                              hour: this.data.hour - 1,
                            };
                            return { ...parent, data };
                          } else if (
                            4 === parent.id &&
                            parent.data.hour === 1
                          ) {
                            let data = { ...parent.data, hour: 24 };
                            return { ...parent, data };
                          } else {
                            return parent;
                          }
                        })
                      );
                    }}
                  >
                    <i className="bi bi-chevron-up"></i>
                  </button>
                  <h5 style={{ color: "rgba(0,0,0,0.5)" }}>
                    {this.data.hour === 1
                      ? "24"
                      : this.data.hour < 11
                      ? `0${this.data.hour - 1}`
                      : this.data.hour - 1}
                  </h5>
                  <h5>
                    {this.data.hour < 10
                      ? `0${this.data.hour}`
                      : this.data.hour}
                  </h5>
                  <h5 style={{ color: "rgba(0,0,0,0.5)" }}>
                    {this.data.hour === 24
                      ? "01"
                      : this.data.hour < 9
                      ? `0${this.data.hour + 1}`
                      : this.data.hour + 1}
                  </h5>
                  <button
                    className="d-flex align-items-center justify-content-center rounded-3 card px-2"
                    onClick={() => {
                      setList((initialState) =>
                        initialState?.map((parent) => {
                          if (4 === parent.id && parent.data.hour !== 24) {
                            let data = {
                              ...parent.data,
                              hour: this.data.hour + 1,
                            };
                            return { ...parent, data };
                          } else if (
                            4 === parent.id &&
                            parent.data.hour === 24
                          ) {
                            let data = { ...parent.data, hour: 1 };
                            return { ...parent, data };
                          } else {
                            return parent;
                          }
                        })
                      );
                    }}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
              </div>
              <div className="col-6 p-1">
                <div className="col d-flex flex-column align-items-center">
                  <button
                    className="d-flex align-items-center justify-content-center rounded-3 card px-2"
                    onClick={() => {
                      setList((initialState) =>
                        initialState?.map((parent) => {
                          if (4 === parent.id && parent.data.minut !== 1) {
                            let data = {
                              ...parent.data,
                              minut: this.data.minut - 1,
                            };
                            return { ...parent, data };
                          } else if (
                            4 === parent.id &&
                            parent.data.minut === 1
                          ) {
                            let data = { ...parent.data, minut: 59 };
                            return { ...parent, data };
                          } else {
                            return parent;
                          }
                        })
                      );
                    }}
                  >
                    <i className="bi bi-chevron-up"></i>
                  </button>
                  <h5 style={{ color: "rgba(0,0,0,0.5)" }}>
                    {this.data.minut === 1
                      ? "59"
                      : this.data.minut < 11
                      ? `0${this.data.minut - 1}`
                      : this.data.minut - 1}
                  </h5>
                  <h5>
                    {this.data.minut < 10
                      ? `0${this.data.minut}`
                      : this.data.minut}
                  </h5>
                  <h5 style={{ color: "rgba(0,0,0,0.5)" }}>
                    {this.data.minut === 59
                      ? "01"
                      : this.data.minut < 9
                      ? `0${this.data.minut + 1}`
                      : this.data.minut + 1}
                  </h5>
                  <button
                    className="d-flex align-items-center justify-content-center rounded-3 card px-2"
                    onClick={() => {
                      setList((initialState) =>
                        initialState?.map((parent) => {
                          if (4 === parent.id && parent.data.minut !== 59) {
                            let data = {
                              ...parent.data,
                              minut: this.data.minut + 1,
                            };
                            return { ...parent, data };
                          } else if (
                            4 === parent.id &&
                            parent.data.minut === 59
                          ) {
                            let data = { ...parent.data, minut: 1 };
                            return { ...parent, data };
                          } else {
                            return parent;
                          }
                        })
                      );
                    }}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 border-end"></div>
              <div className="col-6 d-flex justify-content-center">
                <button
                  className="d-flex align-items-center justify-content-center rounded-3 card px-2"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                  onClick={() => {
                    setIsListItem(false);
                    setList((initialState) =>
                      initialState?.map((parent) => {
                        if (4 === parent?.id) {
                          return {
                            ...parent,
                            value: {
                              title: `${this.data.year}.${
                                this.data.month < 10
                                  ? `0${this.data.month}`
                                  : this.data.month
                              }.${
                                this.data.day < 10
                                  ? `0${this.data.day}`
                                  : this.data.day
                              } soat ${
                                this.data.hour < 10
                                  ? `0${this.data.hour}`
                                  : this.data.hour
                              }:${
                                this.data.minut < 10
                                  ? `0${this.data.minut}`
                                  : this.data.minut
                              }`,
                            },
                            active: false,
                          };
                        } else {
                          return parent;
                        }
                      })
                    );
                    setForm((initialState) => {
                      return { ...initialState, Qachon: this.data };
                    });
                  }}
                >
                  Tayyor
                </button>
              </div>
            </div>
          </li>
        );
      },
    },
    {
      id: 5,
      title: "Nechi pul",
      value: null,
      data: [
        {
          id: 0,
          title: "Soatbay",
          active: false,
          price: null,
          priceData: [
            { id: 1, hour: 1, price: 50 },
            { id: 2, hour: 3, price: 40 },
            { id: 3, hour: 4, price: 30 },
          ],
          about: {
            data: "1-soatiga 50 ming som, 2-soati +40 ming som 3-soati +40 ming som,  4-soati +30 ming som 5-soati +30 ming som,  6-soati +30 ming som 7-soati +30 ming som,  8-soati +30 ming som",
            isOpen: false,
          },
        },
        { id: 1, title: "Kunbay", active: true, price: 200000 },
        { id: 2, title: "Ishbay", active: false, price: 200000 },
      ],
      drop: function () {
        return (
          <div className="w-100 p-2 d-flex flex-column">
            <div
              className="w-100 p-1 d-flex flex-row justify-content-around card rounded-3 border-0"
              style={{ backgroundColor: "rgba(118, 118, 128, 0.12)" }}
            >
              {this?.data?.map((item, index) => (
                <div
                  key={index}
                  className={`p-1 ${
                    item?.active ? "card fw-medium" : "text-secondary"
                  } d-flex justify-content-center align-items-center`}
                  style={{
                    minWidth: "5rem",
                    backgroundColor: item?.active
                      ? "var(--color-white)"
                      : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setList((initialState) =>
                      initialState?.map((parent) => {
                        if (5 === parent?.id) {
                          let data = parent?.data?.map((Dataitem) => {
                            if (Dataitem.id === item.id) {
                              return { ...Dataitem, active: true };
                            } else {
                              return { ...Dataitem, active: false };
                            }
                          });
                          return { ...parent, data };
                        } else {
                          return parent;
                        }
                      })
                    );
                  }}
                >
                  {item?.title}
                </div>
              ))}
            </div>
            {this?.data?.map((item, index) => 
              (item?.title === "Soatbay" && item.active) ?
                <div key={index}>
                    <div className="py-2 d-flex gap-2 flex-column justify-content-center align-items-center">
                      <p className="text-secondary m-0">Soatbay kalkulatori</p>
                      <div className="w-100 d-flex align-items-center justify-content-around flex-row gap-2  px-3">
                        <input
                          className="card py-1 p-2 rounded-3 text-center d-flex justify-content-center align-items-center"
                          style={{ width: "40%", outline: "none" }}
                          type="number"
                          placeholder="soatni kiriting"
                          onChange={(e) => {
                            let { value } = e.target;
                            let res = null;
                            for (let i = 1; i <= value; i++) {
                              if (i === 1) {
                                res = res + item?.priceData[0].price;
                              } else if (i <= 3) {
                                res = res + item?.priceData[1].price;
                              } else {
                                res = res + item?.priceData[2].price;
                              }
                            }
                            setList((initialState) =>
                              initialState?.map((parent) => {
                                if (5 === parent?.id) {
                                  let data = parent?.data?.map((drop) => {
                                    if (drop?.title === item?.title) {
                                      return { ...drop, price: res };
                                    } else {
                                      return drop;
                                    }
                                  });
                                  return { ...parent, data };
                                } else {
                                  return parent;
                                }
                              })
                            );
                          }}
                        />
                        <div>=</div>
                        <div
                          className="card py-1 p-2 rounded-3 text-center d-flex justify-content-center align-items-center"
                          style={{ width: "40%", outline: "none" }}
                        >
                          {item?.price ? item?.price : "natija"}
                        </div>
                      </div>
                      <button
                        className="w-100 d-flex align-items-center justify-content-center rounded-3 card p-1 px-2"
                        style={{ backgroundColor: "var(--color-yellow)" }}
                        onClick={() => {
                          setIsListItem(false);
                          setList((initialState) =>
                            initialState?.map((parent) => {
                              if (5 === parent?.id) {
                                let value = null;
                                parent?.data?.forEach((drop) => {
                                  if (drop?.title === item?.title) {
                                    value = drop?.price
                                      ? {
                                          title: `${drop?.price} 000 som`,
                                          body: item?.title,
                                        }
                                      : null;
                                  }
                                });
                                return { ...parent, value };
                              } else {
                                return parent;
                              }
                            })
                          );
                        }}
                      >
                        Tayyor
                      </button>
                    </div>
                    <div className="py-2 d-flex gap-2 flex-column justify-content-center align-items-center">
                      <button
                        className="card p-2 py-1"
                        onClick={() => {
                          setList((initialState) =>
                            initialState?.map((parent) => {
                              if (5 === parent?.id) {
                                let data = parent?.data?.map((drop) => {
                                  if (drop?.title === item?.title) {
                                    let about = {
                                      ...item.about,
                                      isOpen: !item.about.isOpen,
                                    };
                                    return { ...drop, about };
                                  } else {
                                    return drop;
                                  }
                                });
                                return { ...parent, data };
                              } else {
                                return parent;
                              }
                            })
                          );
                        }}
                      >
                        Soatbay haqida
                      </button>
                      <div>{item?.about?.isOpen && item?.about?.data}</div>
                    </div>
                  </div>
              :(item?.title === "Kunbay" && item.active) ?
                <div className="d-flex" key={index}>
                    <div style={{ width: "40%" }}>
                      <img
                        alt="worker"
                        src={require("../../assets/img/Female and male workers looking at something in the file.png")}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      className="py-2 d-flex gap-2 flex-column justify-content-center align-items-center"
                      style={{ width: "60%" }}
                    >
                      <p className="text-secondary m-0">
                        Kunbay ishchilar narxi
                      </p>
                      <div className="card rounded-3 w-100 d-flex align-items-center flex-row gap-2  px-3">
                        <ListSuccessIcon />
                        <input
                          className=" text-center d-flex justify-content-center align-items-center"
                          style={{
                            color: "#46E156",
                            width: "60%",
                            outline: "none",
                            border: "none",
                          }}
                          type="number"
                          value={item?.price}
                          onChange={(e) => {
                            let { value } = e.target;
                            setList((initialState) =>
                              initialState?.map((parent) => {
                                if (5 === parent?.id) {
                                  let data = parent?.data?.map((drop) => {
                                    if (drop?.title === item.title) {
                                      return {
                                        ...drop,
                                        price: value ? value : null,
                                      };
                                    } else {
                                      return drop;
                                    }
                                  });
                                  return { ...parent, data };
                                } else {
                                  return parent;
                                }
                              })
                            );
                          }}
                        />
                        <div>som</div>
                      </div>
                      <button
                        className="w-100 d-flex align-items-center justify-content-center rounded-3 card px-2"
                        style={{ backgroundColor: "var(--color-yellow)" }}
                        onClick={() => {
                          setIsListItem(false);
                          setList((initialState) =>
                            initialState?.map((parent) => {
                              if (5 === parent?.id) {
                                let value = null;
                                parent?.data?.forEach((drop) => {
                                  if (drop?.title === "Kunbay") {
                                    let num = [];
                                    for (
                                      let i = String(drop.price).length;
                                      i > 0;
                                      i = i - 3
                                    ) {
                                      if (i <= 3) {
                                        num.push(
                                          String(drop.price).slice(0, i)
                                        );
                                      } else {
                                        num.push(
                                          String(drop.price).slice(i - 3, i)
                                        );
                                      }
                                    }
                                    value = `${String(num.reverse())} som`;
                                  }
                                });
                                return {
                                  ...parent,
                                  value: { title: value, body: item?.title },
                                };
                              } else {
                                return parent;
                              }
                            })
                          );
                        }}
                      >
                        Tayyor
                      </button>
                    </div>
                  </div>
              :(item?.title === "Ishbay" && item.active)?
                  <div
                    className="d-flex py-2 d-flex gap-2 flex-column justify-content-center align-items-center"
                    key={index}
                  >
                    <p className="text-secondary m-0">Ishbay sommasi</p>
                    <div className="w-75 d-flex justify-content-center align-items-center flex-row card rounded-2 p-2 py-1">
                      <input
                        className="text-center"
                        style={{
                          width: "50%",
                          outline: "none",
                          border: "none",
                        }}
                        type="number"
                        placeholder="sommani kiriting"
                        value={item.price}
                        onChange={(e) => {
                          let { value } = e.target;
                          setList((initialState) =>
                            initialState?.map((parent) => {
                              if (5 === parent?.id) {
                                let data = parent?.data?.map((drop) => {
                                  if (drop?.title === item.title) {
                                    return {
                                      ...drop,
                                      price: value ? value : null,
                                    };
                                  } else {
                                    return drop;
                                  }
                                });
                                return { ...parent, data };
                              } else {
                                return parent;
                              }
                            })
                          );
                        }}
                      />
                      <div>som</div>
                    </div>
                    <button
                      className="w-100 d-flex align-items-center justify-content-center rounded-3 card px-2"
                      style={{ backgroundColor: "var(--color-yellow)" }}
                      onClick={() => {
                        setIsListItem(false);
                        setList((initialState) =>
                          initialState?.map((parent) => {
                            if (5 === parent?.id) {
                              let value = null;
                              parent?.data?.forEach((drop) => {
                                if (drop?.title === item?.title) {
                                  let num = [];
                                  for (
                                    let i = String(drop.price).length;
                                    i > 0;
                                    i = i - 3
                                  ) {
                                    if (i <= 3) {
                                      num.push(String(drop.price).slice(0, i));
                                    } else {
                                      num.push(
                                        String(drop.price).slice(i - 3, i)
                                      );
                                    }
                                  }
                                  value = `${String(num.reverse())} som`;
                                }
                              });
                              return {
                                ...parent,
                                value: { title: value, body: item?.title },
                              };
                            } else {
                              return parent;
                            }
                          })
                        );
                      }}
                    >
                      Tayyor
                    </button>
                  </div>:""
            )}
          </div>
        );
      },
    },
  ]);
  let [isSearch, setIsSearch] = useState(true);
  useEffect(() => {
    setList((initialState) => {
      if (initialState) {
        return initialState?.map((item) => {
          if (item.id === 0) {
            return { ...item, hover: true };
          } else {
            return item;
          }
        });
      }
    });
  }, []);
  const activeItem = (index) => {
    let newList = list.map((item, itemIndex) => {
      if (index === itemIndex && !item?.active) {
        setIsListItem(true);
        return { ...item, active: true };
      } else if (index === itemIndex && item?.active) {
        setIsListItem(false);
        return { ...item, active: false };
      } else {
        return { ...item, active: false };
      }
    });
    setList(newList);
  };
  const hoverItem = (index) => {
    let newArry = list?.map((item, itemIndex) => {
      if (itemIndex === index) {
        return { ...item, hover: true };
      } else {
        return { ...item, hover: false };
      }
    });
    setList(newArry);
  };

  const searchWorker = () => {
    workersApi().then((res) => {
      if (res?.data) {
        let resultWorkers = res.data.data.filter((worker) =>
          form?.Qayerga?.geolocation?.latitude
            ? worker.geolocation.latitude -
                form?.Qayerga?.geolocation?.latitude <
                0.01 && worker
            : worker
        );
        setWorkerResult(resultWorkers);
      }
    });
  };
  return (
    <div
      className="position-relative p-2 px-3 card rounded-5 shadow-lg col-12 col-sm-10  col-md-6 col-xl-5 col-xxl-4 h-75"
    >
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ height: "15%" }}
      >
        <div
          className="card fw-medium border-0 p-1 rounded-3 d-flex flex-row align-items-center shadow-lg"
          style={{
            width: "auto",
            height: "2.5rem",
            backgroundColor: "rgba(118, 118, 128, 0.12)",
          }}
        >
          <div
            className={`p-1 px-4 border-0 p-1 rounded-3 d-flex align-items-center ${
              isSearch ? "card" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setIsSearch(true)}
          >
            Qidiruv
          </div>
          <div
            className={`p-1 px-4 border-0 p-1 rounded-3 d-flex align-items-center ${
              !isSearch ? "card" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsSearch(false);
              searchWorker();
            }}
          >
            Natijalar
          </div>
        </div>
      </div>
      <>
      </>
      {isSearch ? (
        <>
          <div
            className="p-1 position-relative card pt-2 pe-2 rounded-4 shadow-lg border-0"
            style={{ height: "70%" }}
          >
            <ul
              className={`${styles.scrollList} h-100`}
              style={{ listStyleType: "none" }}
            >
              {list?.map((item, index) => (
                <li
                  key={index}
                  className="p-3 py-2 d-flex justify-content-between align-items-center border-bottom"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    activeItem(index);
                  }}
                  onMouseEnter={() => {
                    hoverItem(index);
                  }}
                  onMouseLeave={() => {
                    hoverItem("a");
                  }}
                >
                  {item?.value ? (
                    <div className="d-flex align-items-center gap-2">
                      <ListSuccessIcon />
                      <div className="d-flex flex-column justify-content-center">
                        <div className="fw-medium text-capitalize">
                          {item?.value?.title}
                        </div>
                        <div
                          className="text-capitalize"
                          style={{
                            fontSize: "0.8rem",
                            color: "rgba(0,0,0,0.5)",
                          }}
                        >
                          {item?.value?.body}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center gap-2">
                      <ListIcon />
                      <div>{item?.title}</div>
                    </div>
                  )}
                  <div>
                    {item?.active ? (
                      <i className="bi bi-chevron-down"></i>
                    ) : item?.hover ? (
                      <PlusIcon />
                    ) : item?.value ? (
                      <i className="bi bi-x-lg"></i>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {/* target */}
            {islistItem && (
              <div
                className={`${styles.searchListTarget} w-100 mh-100 position-absolute card pt-2 rounded-4 shadow-lg border-0`}
                onMouseLeave={() => {
                  setIsListItem(false);
                }}
              >
                <ul className={`${styles.scrollList} overflow-y-scroll`}>
                  {list?.filter((item) => item?.active && item)[0]?.drop()}
                </ul>
              </div>
            )}
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "15%" }}
          >
            <button
              className="btn d-flex align-items-center gap-2 fw-medium"
              style={{ backgroundColor: "var(--color-yellow)" }}
              onClick={() => {
                setIsSearch(false);
                searchWorker();
              }}
            >
              <div>
                <i className="bi bi-search h6"></i>
              </div>
              <div>Qidirish</div>
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className="p-1 position-relative card pt-2 pe-2 rounded-4 shadow-lg border-0"
            style={{ height: "90%" }}
          >
            <ul
              className={`${styles.scrollList} h-100`}
              style={{ listStyleType: "none" }}
            >
              {workerResult?.map((worker, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-around align-items-center border-bottom p-1 py-2"
                  style={{
                    cursor: "pointer",
                    color: "rgba(0,0,0,0.6)",
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    activeItem(index);
                  }}
                  onMouseEnter={() => {
                    hoverItem(index);
                  }}
                  onMouseLeave={() => {
                    hoverItem("a");
                  }}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={require("../../assets/img/worker.png")}
                      width="30rem"
                      height="30rem"
                      alt="profile"
                    />
                    <div className="d-flex flex-column">
                      <div>{`${worker.firstname}.${worker.lastname.slice(
                        0,
                        1
                      )}`}</div>
                      <div
                        className="d-flex gap-2"
                        style={{ fontSize: "0.7rem" }}
                      >
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "var(--color-yellow)" }}
                        ></i>
                        4.5
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="d-flex">
                      <i className="bi bi-telephone-fill"></i>
                      <div>{worker.phone}</div>
                    </div>
                  </div>
                  <div className="d-flex" style={{ fontSize: "0.8rem" }}>
                    <i className="bi bi-geo-alt-fill"></i>
                    <div>0.9km</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
