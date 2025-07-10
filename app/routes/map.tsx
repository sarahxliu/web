import { useContext, useEffect } from "react";
import { IdeaContext } from "~/context/IdeaContext";

const Map = () => {
  const ideaContext = useContext(IdeaContext);

  useEffect(
    () => console.log(ideaContext.targetBorough),
    [ideaContext.targetBorough]
  );

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 161.43091 173.94231"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[600px]"
      >
        <defs id="defs1" />
        <g id="layer1" transform="translate(-23.755815,-6.2404645)">
          {/* brooklyn */}
          <path
            className={`${
              ideaContext.targetBorough === "brooklyn"
                ? "fill-green-500 hover:fill-green-600"
                : "fill-green-100 hover:fill-green-200"
            } duration-75`}
            onClick={() => ideaContext.setTargetBorough("brooklyn")}
            // apply the same hover scheme and click behavior for the remaining borough paths
            d="M 108.7201,95.465102 95.011846,119.20851 a 4.2333332,4.2333332 74.999995 0 0 1.549508,5.78284 l 30.946956,17.86722 a 4.2333347,4.2333347 165.00001 0 0 5.78284,-1.5495 l 11.23483,-19.4593 a 5.5169876,5.5169876 82.500017 0 0 -0.87675,-6.65959 l -9.0697,-9.06971 a 5.516984,5.516984 7.5000027 0 0 -6.65959,-0.87675 l -3.20992,1.85324 a 4.261157,4.261157 14.812314 0 1 -5.80681,-1.53556 l -5.9258,-10.110243 a 2.46264,2.46264 179.81232 0 0 -4.25731,0.01395 z"
            id="path2"
          />

          {/* queens */}
          <path
            className={`${
              ideaContext.targetBorough === "queens"
                ? "fill-green-500 hover:fill-green-600"
                : "fill-green-100 hover:fill-green-200"
            } duration-75`}
            onClick={() => ideaContext.setTargetBorough("queens")}
            d="m 116.86533,89.206085 5.21068,9.02518 a 4.2333334,4.2333334 15.000013 0 0 5.78284,1.549509 l 3.07629,-1.77609 a 5.5169883,5.5169883 7.5000086 0 1 6.65959,0.876753 l 10.85985,10.859853 a 7.332346,7.332346 14.999996 0 0 7.08251,1.89775 l 25.56054,-6.84893 a 5.5169884,5.5169884 127.49999 0 0 4.08909,-5.329003 V 70.99619 A 10.22017,10.22017 67.499999 0 0 182.1933,63.769438 L 162.48003,44.056167 a 5.5169871,5.5169871 7.4999981 0 0 -6.65959,-0.876752 l -19.33653,11.163947 a 16.888017,16.888017 135.92758 0 0 -5.90041,5.712396 l -13.6006,21.888423 a 7.0656636,7.0656636 90.927592 0 0 -0.11757,7.261904 z"
            id="path3"
          />
          {/* manhattan */}
          <path
            className={`${
              ideaContext.targetBorough === "manhattan"
                ? "fill-green-500 hover:fill-green-600"
                : "fill-green-100 hover:fill-green-200"
            } duration-75`}
            onClick={() => ideaContext.setTargetBorough("manhattan")}
            d="M 72.813579,87.709841 84.023132,45.875223 a 32.155357,32.155357 112.5 0 1 3.212334,-7.75526 L 92.985795,28.1601 a 3.2483509,3.2483509 172.5 0 1 5.110086,-0.672755 6.0258976,6.0258976 82.47412 0 1 0.789235,5.973988 l -2.504763,9.347913 a 10.220174,10.220174 82.499997 0 0 1.020999,7.75526 l 3.299048,5.714126 a 10.220171,10.220171 82.500004 0 1 1.021,7.75526 l -8.673341,32.369352 a 15.79902,15.79902 120 0 1 -4.089086,7.082506 l -7.998661,7.99866 a 5.516985,5.516985 172.5 0 1 -6.659592,0.87675 l -0.977732,-0.56449 a 6.4476646,6.4476646 63.287656 0 1 -3.18142,-6.32216 l 1.09159,-9.470096 a 57.477375,57.477375 100.78765 0 1 1.580421,-8.294573 z"
            id="path4"
          />
          {/* bronx */}
          <path
            className={`${
              ideaContext.targetBorough === "bronx"
                ? "fill-green-500 hover:fill-green-600"
                : "fill-green-100 hover:fill-green-200"
            } duration-75`}
            onClick={() => ideaContext.setTargetBorough("bronx")}
            d="m 101.09868,41.876733 2.83569,-10.582959 a 7.3323501,7.3323501 75.000007 0 0 -1.89775,-7.082505 l -0.55281,-0.552809 a 5.5169879,5.5169879 82.50001 0 1 -0.87675,-6.659593 l 4.61875,-7.9999076 a 5.5169877,5.5169877 157.5 0 1 6.20576,-2.5705065 l 41.25028,11.0529831 a 4.2333326,4.2333326 60.000005 0 1 2.99342,5.184753 l -2.95051,11.011461 a 10.220173,10.220173 127.5 0 1 -4.76184,6.205753 l -35.09737,20.263473 a 4.191783,4.191783 15.282561 0 1 -5.74657,-1.570206 l -5.03557,-8.923978 a 10.364448,10.364448 82.782562 0 1 -0.98473,-7.775959 z"
            id="path5"
          />
          {/* staten island */}
          <path
            className={`${
              ideaContext.targetBorough === "staten island"
                ? "fill-green-500 hover:fill-green-600"
                : "fill-green-100 hover:fill-green-200"
            } duration-75`}
            onClick={() => ideaContext.setTargetBorough("staten island")}
            d="m 25.952119,166.32699 8.772326,-8.77232 a 10.220168,10.220168 112.5 0 0 2.993419,-7.22675 v -17.36188 a 10.220166,10.220166 112.50001 0 1 2.99342,-7.22675 l 5.902488,-5.90248 a 5.5169895,5.5169895 172.50001 0 1 6.659594,-0.87675 l 32.932625,19.01365 a 7.3323477,7.3323477 59.999998 0 1 3.666174,6.35 v 15.43368 a 5.5169872,5.5169872 127.5 0 1 -4.089086,5.329 l -55.81243,14.95489 a 4.1523541,4.1523541 30.553278 0 1 -5.105581,-3.01381 l -0.889873,-3.59758 a 7.4986509,7.4986509 105.55328 0 1 1.976924,-7.1029 z"
            id="path6"
          />
        </g>
      </svg>
    </div>
  );
};

export default Map;
