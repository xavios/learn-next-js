import { describe, it, expect } from "vitest";
import { getAvailableYears } from "./time-helper";
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
});
