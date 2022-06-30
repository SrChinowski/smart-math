import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Status from '../status';
import { Write } from '../write';


function useDuck({
    reducer, status,
}) {
    const S = Status({ reducer, status });
    const W = Write({ reducer });
    const { fetchStatus, successStatus, failedStatus } = S.StatusCreator(status).getThreesome();
    const dispatch = useDispatch();
    const { statuses/*, errors */ } = useSelector(({ app }) => app);

    let updater = () => { };

    useEffect(() => {
        updater();
    }, [statuses]);

    const isFetching = (listener) => {
        updater = listener;
        return statuses.includes(fetchStatus)
    };

    const isSuccess = (listener) => {
        updater = listener;
        return statuses.includes(successStatus);
    };

    const isFailed = (listener) => {
        updater = listener;
        return statuses.includes(failedStatus);
    };

    const clean = () => {
        return dispatch(S.clear(status));
    };

    const write = (path, value, type) =>
        dispatch(W.setValue(path, value, type));

    const getErrors = () => dispatch(S.getErrors());

    return {
        isFetching,
        isSuccess,
        isFailed,
        clean,
        write,
        getErrors,
    };
}

export default useDuck;