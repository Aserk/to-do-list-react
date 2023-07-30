import { all } from "redux-saga/effects";
import { watchExampleFetchTasks } from "./App/features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchExampleFetchTasks(),
    ]);
}