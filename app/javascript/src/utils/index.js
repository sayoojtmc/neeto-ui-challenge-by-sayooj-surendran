import dayjs from "dayjs";
import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const getRelativeTimeFromNow = date => dayjs().to(dayjs(date));
export const getDayAndTimeFromDate = date =>
  dayjs(dayjs(date)).format("dddd, hh:mmA");
