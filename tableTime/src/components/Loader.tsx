import { usePromiseTracker } from "react-promise-tracker";

const Loader = () => {
    const { promiseInProgress } = usePromiseTracker();

    return  promiseInProgress ? (
        <div
            role="status"
            className="fixed inset-0 flex items-center justify-center bg-primary-100 bg-opacity-30 z-50"
            onClick={(e) => e.stopPropagation()}
        >
            <svg
                className="w-12 h-12 animate-spin text-primary"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className="opacity-25"
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="5"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 0 0-15-15V5z"
                />
            </svg>
        </div>
    ) : null;
};

export default Loader;
