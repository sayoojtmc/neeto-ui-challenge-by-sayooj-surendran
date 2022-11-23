import dayjs from "dayjs";
import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const calculateCreatedAgo = date => dayjs(date).fromNow();
export const getDayFromDate = date => dayjs(date).format("dddd, hh:mmA");
