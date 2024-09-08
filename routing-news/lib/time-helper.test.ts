import { describe, it, expect } from "vitest";
import {
  getAvailableYears,
  getNewsOfYear,
  getLatestNews,
  getAvailableMonths,
  getNewsOfYearAndMonth,
} from "./time-helper";
import { News } from "@/lib/news";

const testNews: News[] = [
  {
    id: 0,
    slug: "test",
    title: "test",
    content: "test",
    image: "test",
    time: new Date(2024, 0, 1),
  },
  {
    id: 0,
    slug: "test",
    title: "test",
    content: "test",
    image: "test",
    time: new Date(1997, 0, 1),
  },
  {
    id: 0,
    slug: "test",
    title: "test",
    content: "test",
    image: "test",
    time: new Date(2001, 0, 1),
  },
  {
    id: 0,
    slug: "test",
    title: "test",
    content: "test",
    image: "test",
    time: new Date(1557, 0, 1),
  },
];

describe("time-helper", () => {
  describe("getAvailableYears()", () => {
    it("can be called", () => {
      getAvailableYears([]);
    });
    it("can receive an array with one news and return an array with a year", () => {
      expect(getAvailableYears([testNews[0]])).toStrictEqual([2024]);
    });

    it("can receive an array with two news and return an array with two sorted years", () => {
      expect(getAvailableYears(testNews.slice(0, 2))).toStrictEqual([
        1997, 2024,
      ]);
    });

    it("can receive an array with news and return an array with sorted years", () => {
      expect(getAvailableYears(testNews)).toStrictEqual([
        1557, 1997, 2001, 2024,
      ]);
    });

    it("can receive an array with news from the same year, returns unique years", () => {
      expect(getAvailableYears([...testNews, ...testNews])).toStrictEqual([
        1557, 1997, 2001, 2024,
      ]);
    });
  });
  describe("getNewsOfYear", () => {
    it("can be called", () => {
      getNewsOfYear([], 0);
    });
    it("gets a news for a year", () => {
      expect(getNewsOfYear(testNews, 2001)).toStrictEqual([testNews[2]]);
    });
    it("gets multiple news for the year", () => {
      expect(getNewsOfYear([...testNews, ...testNews], 1557)).toStrictEqual([
        testNews[3],
        testNews[3],
      ]);
    });
  });
  describe("getLAtestNews", () => {
    it("can be called", () => {
      getLatestNews([]);
    });
    it("gets back the 3 top latest news", () => {
      const latest = getLatestNews(testNews);
      expect(latest).toHaveLength(3);
      expect(latest).toStrictEqual([testNews[0], testNews[2], testNews[1]]);
    });
    it("gets back the 2 top latest news, if input is shorted", () => {
      const latest = getLatestNews(testNews.slice(0, 2));
      expect(latest).toHaveLength(2);
      expect(latest).toStrictEqual([testNews[0], testNews[1]]);
    });
  });
  describe("getAvailableMonths", () => {
    it("can be called", () => {
      getAvailableMonths(testNews, 2022);
    });
    it("returns the month for a given year", () => {
      expect(getAvailableMonths(testNews, 2024)).toStrictEqual([0]);
    });
    it("returns the months for a given year", () => {
      const additionalMonths = [...testNews];
      for (let idx in testNews) {
        additionalMonths[idx] = { ...testNews[idx] };
      }
      additionalMonths[3].time = new Date(2024, 3, 1);
      additionalMonths[2].time = new Date(2024, 7, 1);
      additionalMonths[1].time = new Date(2024, 5, 1);
      expect(
        getAvailableMonths([...testNews, ...additionalMonths], 2024)
      ).toStrictEqual([0, 3, 5, 7]);
    });
    it("returns empty array for a not found year year", () => {
      expect(getAvailableMonths([...testNews], 1999)).toStrictEqual([]);
    });
  });
  describe("getNewsOfYearAndMonth", () => {
    it("can be called", () => {
      getNewsOfYearAndMonth(testNews, 2024, 0);
    });
    it("returns one news for a year and a month", () => {
      expect(getNewsOfYearAndMonth(testNews, 2024, 0)).toStrictEqual([
        testNews[0],
      ]);
    });
    it("returns multiple news for a year and a month", () => {
      expect(
        getNewsOfYearAndMonth([...testNews, testNews[0]], 2024, 0)
      ).toStrictEqual([testNews[0], testNews[0]]);
    });
  });
});
