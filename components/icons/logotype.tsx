import { clsx } from "clsx";

type Props = { className?: string; style?: React.CSSProperties };

export type Ref = SVGSVGElement | null;

export default function Logotype(props: Props) {
  return (
    <svg
      aria-label={`${process.env.NEXT_PUBLIC_SITE_NAME} logotype`}
      className={clsx(props.className, "icon fill-inherit")}
      shapeRendering="geometricPrecision"
      stroke="none"
      style={props.style}
      viewBox="0 0 1280 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1.04504,0,0,1.18316,-128.718,-123.655)">
        <g transform="matrix(222,0,0,222,104,233.431)">
          <path d="M0.38,-0.175L0.473,-0.547L0.455,-0.564L0.457,-0.57L0.121,-0.57C0.123,-0.542 0.13,-0.517 0.141,-0.496C0.152,-0.475 0.162,-0.458 0.17,-0.446C0.171,-0.444 0.172,-0.442 0.173,-0.441L0.089,-0.101L0.09,-0.101C0.089,-0.099 0.089,-0.096 0.089,-0.092L0.089,-0.086C0.089,-0.077 0.09,-0.068 0.093,-0.059C0.095,-0.049 0.098,-0.04 0.103,-0.031C0.107,-0.022 0.112,-0.013 0.118,-0.006C0.124,0.002 0.131,0.008 0.138,0.012L0.146,0.02C0.157,0.031 0.17,0.037 0.184,0.037L0.711,0.037C0.721,0.037 0.732,0.033 0.746,0.025C0.759,0.017 0.771,0.007 0.783,-0.004C0.795,-0.015 0.806,-0.028 0.815,-0.041C0.824,-0.054 0.83,-0.066 0.832,-0.076L0.831,-0.077L0.948,-0.547L0.93,-0.564L0.932,-0.57L0.681,-0.57L0.584,-0.179L0.584,-0.178C0.583,-0.177 0.583,-0.177 0.583,-0.176L0.583,-0.177C0.582,-0.176 0.582,-0.176 0.582,-0.175L0.38,-0.175ZM0.691,-0L0.164,-0C0.155,-0 0.146,-0.004 0.139,-0.011C0.132,-0.018 0.126,-0.026 0.121,-0.037C0.116,-0.047 0.112,-0.058 0.11,-0.069C0.108,-0.08 0.108,-0.091 0.11,-0.1L0.195,-0.443C0.194,-0.446 0.19,-0.451 0.185,-0.459C0.18,-0.467 0.174,-0.476 0.168,-0.487C0.162,-0.497 0.156,-0.508 0.151,-0.519C0.146,-0.53 0.143,-0.541 0.142,-0.55L0.432,-0.55L0.338,-0.173C0.337,-0.169 0.337,-0.165 0.34,-0.161C0.342,-0.157 0.345,-0.155 0.348,-0.155L0.585,-0.155C0.588,-0.155 0.592,-0.157 0.596,-0.161C0.599,-0.165 0.602,-0.169 0.603,-0.173L0.697,-0.55L0.907,-0.55L0.795,-0.1C0.793,-0.091 0.788,-0.08 0.78,-0.069C0.772,-0.058 0.763,-0.047 0.753,-0.037C0.742,-0.026 0.732,-0.018 0.721,-0.011C0.709,-0.004 0.7,-0 0.691,-0Z" />
        </g>
        <g transform="matrix(222,0,0,222,288.926,233.431)">
          <path d="M0.127,0.086C0.148,0.075 0.169,0.063 0.188,0.052C0.206,0.04 0.222,0.029 0.235,0.02L0.236,0.02C0.225,0.028 0.21,0.038 0.191,0.05C0.171,0.062 0.15,0.074 0.127,0.086ZM0.38,-0.55L0.364,-0.57L0.148,-0.57L-0.031,0.153C-0.028,0.153 -0.025,0.153 -0.024,0.152L-0.007,0.17C0.004,0.17 0.023,0.165 0.048,0.155C0.073,0.144 0.1,0.132 0.128,0.118C0.155,0.103 0.182,0.089 0.207,0.074C0.232,0.058 0.25,0.046 0.261,0.037L0.27,0.037L0.33,-0.206L0.51,0.02L0.514,0.02L0.531,0.037L0.744,0.037L0.889,-0.547L0.871,-0.564L0.873,-0.57L0.621,-0.57L0.561,-0.323L0.383,-0.547L0.38,-0.55ZM0.355,-0.55L0.571,-0.279L0.638,-0.55L0.848,-0.55L0.711,-0L0.519,-0L0.305,-0.271L0.237,-0L0.236,-0C0.235,0.003 0.229,0.009 0.219,0.017C0.208,0.025 0.195,0.034 0.18,0.044C0.165,0.053 0.148,0.063 0.129,0.074C0.11,0.085 0.092,0.094 0.075,0.103C0.058,0.112 0.042,0.119 0.027,0.125C0.012,0.13 0.001,0.133 -0.006,0.133L0.164,-0.55L0.355,-0.55Z" />
        </g>
        <g transform="matrix(222,0,0,222,460.754,233.431)">
          <path d="M0.106,-0L0.633,-0C0.642,-0 0.652,-0.004 0.663,-0.011C0.674,-0.018 0.684,-0.026 0.695,-0.037C0.705,-0.047 0.714,-0.058 0.722,-0.069C0.73,-0.08 0.735,-0.091 0.737,-0.1L0.765,-0.211L0.555,-0.211L0.545,-0.173C0.544,-0.169 0.541,-0.165 0.538,-0.161C0.534,-0.157 0.53,-0.155 0.527,-0.155L0.29,-0.155C0.286,-0.155 0.283,-0.157 0.281,-0.161C0.279,-0.165 0.279,-0.169 0.28,-0.173L0.331,-0.377C0.332,-0.38 0.335,-0.384 0.339,-0.389C0.342,-0.393 0.346,-0.395 0.349,-0.395L0.586,-0.395C0.589,-0.395 0.592,-0.393 0.595,-0.389C0.597,-0.385 0.597,-0.381 0.596,-0.377L0.587,-0.339L0.797,-0.339L0.824,-0.45C0.826,-0.459 0.826,-0.469 0.824,-0.481C0.822,-0.492 0.819,-0.503 0.814,-0.514C0.809,-0.524 0.802,-0.533 0.795,-0.54C0.787,-0.547 0.779,-0.55 0.77,-0.55L0.243,-0.55C0.234,-0.55 0.225,-0.547 0.214,-0.54C0.203,-0.533 0.192,-0.524 0.182,-0.514C0.171,-0.503 0.162,-0.492 0.154,-0.481C0.146,-0.469 0.141,-0.459 0.139,-0.45L0.052,-0.1C0.05,-0.091 0.05,-0.08 0.052,-0.069C0.054,-0.058 0.057,-0.047 0.063,-0.037C0.068,-0.026 0.074,-0.018 0.081,-0.011C0.088,-0.004 0.097,-0 0.106,-0ZM0.366,-0.35L0.322,-0.175L0.524,-0.175C0.524,-0.176 0.524,-0.176 0.525,-0.177L0.525,-0.176C0.525,-0.177 0.525,-0.177 0.526,-0.178L0.526,-0.179L0.54,-0.231L0.79,-0.231L0.788,-0.225L0.806,-0.208L0.773,-0.077L0.774,-0.076C0.772,-0.066 0.766,-0.054 0.757,-0.041C0.748,-0.028 0.737,-0.015 0.725,-0.004C0.713,0.007 0.7,0.017 0.688,0.025C0.675,0.033 0.663,0.037 0.653,0.037L0.126,0.037C0.112,0.037 0.099,0.031 0.088,0.02L0.08,0.012C0.073,0.008 0.066,0.002 0.06,-0.006C0.054,-0.013 0.049,-0.022 0.045,-0.031C0.04,-0.04 0.037,-0.049 0.035,-0.059C0.032,-0.068 0.031,-0.077 0.031,-0.086L0.031,-0.094C0.031,-0.096 0.032,-0.1 0.033,-0.105L0.119,-0.451L0.118,-0.451C0.12,-0.462 0.126,-0.474 0.136,-0.488C0.145,-0.501 0.156,-0.514 0.169,-0.527C0.181,-0.539 0.194,-0.549 0.208,-0.558C0.221,-0.566 0.233,-0.57 0.243,-0.57L0.77,-0.57C0.781,-0.57 0.791,-0.567 0.8,-0.56C0.809,-0.553 0.816,-0.545 0.823,-0.535L0.828,-0.53C0.839,-0.519 0.847,-0.506 0.853,-0.49C0.859,-0.474 0.862,-0.459 0.862,-0.444L0.862,-0.436C0.862,-0.434 0.861,-0.431 0.86,-0.427L0.861,-0.426L0.831,-0.302L0.585,-0.302L0.568,-0.319L0.561,-0.319L0.57,-0.358L0.369,-0.358C0.37,-0.358 0.37,-0.357 0.369,-0.355C0.368,-0.353 0.368,-0.351 0.367,-0.35L0.366,-0.35Z" />
        </g>
        <g transform="matrix(222,0,0,222,632.804,233.431)">
          <path d="M0.127,0.086C0.148,0.075 0.169,0.063 0.188,0.052C0.206,0.04 0.222,0.029 0.235,0.02L0.236,0.02C0.225,0.028 0.21,0.038 0.191,0.05C0.171,0.062 0.15,0.074 0.127,0.086ZM0.38,-0.55L0.364,-0.57L0.148,-0.57L-0.031,0.153C-0.028,0.153 -0.025,0.153 -0.024,0.152L-0.007,0.17C0.004,0.17 0.023,0.165 0.048,0.155C0.073,0.144 0.1,0.132 0.128,0.118C0.155,0.103 0.182,0.089 0.207,0.074C0.232,0.058 0.25,0.046 0.261,0.037L0.27,0.037L0.33,-0.206L0.51,0.02L0.514,0.02L0.531,0.037L0.744,0.037L0.889,-0.547L0.871,-0.564L0.873,-0.57L0.621,-0.57L0.561,-0.323L0.383,-0.547L0.38,-0.55ZM0.355,-0.55L0.571,-0.279L0.638,-0.55L0.848,-0.55L0.711,-0L0.519,-0L0.305,-0.271L0.237,-0L0.236,-0C0.235,0.003 0.229,0.009 0.219,0.017C0.208,0.025 0.195,0.034 0.18,0.044C0.165,0.053 0.148,0.063 0.129,0.074C0.11,0.085 0.092,0.094 0.075,0.103C0.058,0.112 0.042,0.119 0.027,0.125C0.012,0.13 0.001,0.133 -0.006,0.133L0.164,-0.55L0.355,-0.55Z" />
        </g>
        <g transform="matrix(222,0,0,222,804.632,233.431)">
          <path d="M0.799,-0.533L0.8,-0.532C0.8,-0.533 0.8,-0.533 0.799,-0.533ZM0.542,-0.345L0.503,-0.359L0.545,-0.359L0.542,-0.345ZM0.323,-0.174L0.327,-0.189L0.368,-0.174L0.323,-0.174ZM0.612,-0.32L0.81,-0.32L0.836,-0.426L0.835,-0.427C0.836,-0.431 0.837,-0.434 0.837,-0.436L0.837,-0.444C0.837,-0.459 0.834,-0.474 0.828,-0.49C0.822,-0.506 0.814,-0.519 0.803,-0.53L0.8,-0.532L0.799,-0.533C0.792,-0.544 0.785,-0.553 0.776,-0.56C0.767,-0.567 0.756,-0.57 0.745,-0.57L0.243,-0.57C0.233,-0.57 0.221,-0.566 0.208,-0.558C0.194,-0.549 0.181,-0.539 0.169,-0.527C0.156,-0.514 0.145,-0.501 0.136,-0.488C0.126,-0.474 0.12,-0.462 0.118,-0.451L0.119,-0.451L0.09,-0.335C0.09,-0.32 0.094,-0.307 0.104,-0.296C0.113,-0.285 0.122,-0.276 0.132,-0.269L0.133,-0.268L0.135,-0.267C0.138,-0.264 0.14,-0.262 0.143,-0.26C0.146,-0.257 0.149,-0.255 0.152,-0.252L0.259,-0.213L0.058,-0.213L0.031,-0.101L0.032,-0.101C0.031,-0.099 0.031,-0.096 0.031,-0.092L0.031,-0.086C0.031,-0.077 0.032,-0.068 0.035,-0.059C0.037,-0.049 0.04,-0.04 0.045,-0.031C0.049,-0.022 0.054,-0.013 0.06,-0.006C0.066,0.002 0.073,0.008 0.08,0.012L0.088,0.02C0.099,0.031 0.112,0.037 0.126,0.037L0.628,0.037C0.638,0.037 0.65,0.033 0.663,0.025C0.676,0.017 0.688,0.007 0.7,-0.004C0.712,-0.015 0.723,-0.028 0.732,-0.041C0.741,-0.054 0.747,-0.066 0.749,-0.076L0.748,-0.077L0.778,-0.196C0.778,-0.206 0.776,-0.215 0.772,-0.223C0.768,-0.23 0.763,-0.237 0.756,-0.244L0.753,-0.246C0.746,-0.258 0.735,-0.27 0.72,-0.281L0.612,-0.32ZM0.608,-0L0.106,-0C0.097,-0 0.088,-0.004 0.081,-0.011C0.074,-0.018 0.068,-0.026 0.063,-0.037C0.057,-0.047 0.054,-0.058 0.052,-0.069C0.05,-0.08 0.05,-0.091 0.052,-0.1L0.075,-0.193L0.285,-0.193L0.28,-0.172C0.279,-0.168 0.279,-0.164 0.281,-0.16C0.283,-0.156 0.286,-0.154 0.289,-0.154L0.509,-0.154L0.141,-0.287C0.134,-0.292 0.127,-0.299 0.12,-0.307C0.113,-0.315 0.11,-0.324 0.11,-0.334L0.139,-0.45C0.141,-0.459 0.146,-0.469 0.154,-0.481C0.162,-0.492 0.171,-0.503 0.182,-0.514C0.192,-0.524 0.203,-0.533 0.214,-0.54C0.225,-0.547 0.234,-0.55 0.243,-0.55L0.745,-0.55C0.754,-0.55 0.762,-0.547 0.77,-0.54C0.777,-0.533 0.784,-0.524 0.789,-0.514C0.794,-0.503 0.797,-0.492 0.799,-0.481C0.801,-0.469 0.801,-0.459 0.799,-0.45L0.776,-0.357L0.566,-0.357L0.571,-0.378C0.572,-0.382 0.572,-0.386 0.57,-0.39C0.568,-0.394 0.565,-0.396 0.562,-0.396L0.342,-0.396L0.711,-0.263C0.72,-0.256 0.727,-0.249 0.733,-0.242C0.738,-0.235 0.741,-0.226 0.741,-0.216L0.712,-0.1C0.71,-0.091 0.705,-0.08 0.697,-0.069C0.689,-0.058 0.68,-0.047 0.67,-0.037C0.659,-0.026 0.649,-0.018 0.638,-0.011C0.627,-0.004 0.617,-0 0.608,-0Z" />
        </g>
        <g transform="matrix(222,0,0,222,971.132,233.431)">
          <path d="M0.357,-0.315L0.368,-0.358L0.571,-0.358L0.561,-0.318L0.561,-0.317C0.56,-0.316 0.56,-0.316 0.56,-0.315L0.357,-0.315ZM-0.024,0.152L-0.007,0.17C0.002,0.17 0.014,0.167 0.031,0.161C0.048,0.155 0.066,0.147 0.087,0.138C0.107,0.129 0.128,0.118 0.149,0.108C0.17,0.096 0.19,0.086 0.208,0.075C0.225,0.064 0.24,0.055 0.252,0.047C0.264,0.038 0.271,0.032 0.272,0.029L0.325,-0.186L0.493,0.02L0.497,0.02L0.514,0.037L0.797,0.037L0.76,-0.008L0.674,-0.114C0.697,-0.116 0.717,-0.121 0.733,-0.128C0.749,-0.135 0.763,-0.144 0.774,-0.156C0.785,-0.167 0.794,-0.181 0.801,-0.198C0.808,-0.215 0.814,-0.234 0.819,-0.256L0.861,-0.426L0.86,-0.427C0.861,-0.431 0.862,-0.434 0.862,-0.436L0.862,-0.444C0.862,-0.459 0.859,-0.474 0.853,-0.49C0.847,-0.506 0.839,-0.519 0.828,-0.53L0.823,-0.535C0.816,-0.545 0.809,-0.553 0.8,-0.56C0.791,-0.567 0.781,-0.57 0.77,-0.57L0.148,-0.57L-0.031,0.153C-0.028,0.153 -0.025,0.153 -0.024,0.152ZM0.824,-0.45L0.782,-0.28C0.777,-0.259 0.771,-0.24 0.764,-0.224C0.756,-0.208 0.747,-0.195 0.736,-0.184C0.725,-0.173 0.711,-0.165 0.694,-0.16C0.677,-0.154 0.655,-0.151 0.63,-0.15L0.62,-0.15L0.741,-0L0.502,-0L0.336,-0.204L0.359,-0.295L0.562,-0.295C0.571,-0.295 0.577,-0.301 0.58,-0.313L0.596,-0.377C0.597,-0.38 0.597,-0.384 0.595,-0.389C0.592,-0.393 0.589,-0.395 0.586,-0.395L0.335,-0.395L0.237,-0C0.236,0.003 0.23,0.009 0.22,0.017C0.209,0.025 0.196,0.034 0.181,0.044C0.165,0.053 0.148,0.063 0.129,0.074C0.11,0.085 0.092,0.094 0.075,0.103C0.057,0.112 0.041,0.119 0.027,0.125C0.012,0.13 0.001,0.133 -0.006,0.133L0.164,-0.55L0.77,-0.55C0.779,-0.55 0.787,-0.547 0.795,-0.54C0.802,-0.533 0.809,-0.524 0.814,-0.514C0.819,-0.503 0.822,-0.492 0.824,-0.481C0.826,-0.469 0.826,-0.459 0.824,-0.45Z" />
        </g>
        <g transform="matrix(222,0,0,222,1143.18,233.431)">
          <path d="M0.581,-0.175L0.381,-0.175L0.427,-0.358L0.628,-0.358L0.584,-0.182L0.581,-0.175ZM0.067,0.02L0.084,0.037L0.71,0.037C0.72,0.037 0.732,0.033 0.745,0.025C0.758,0.017 0.771,0.007 0.783,-0.005C0.795,-0.016 0.806,-0.029 0.815,-0.042C0.824,-0.055 0.83,-0.067 0.832,-0.077L0.831,-0.078L0.918,-0.425C0.919,-0.43 0.92,-0.434 0.92,-0.435L0.92,-0.443C0.92,-0.458 0.917,-0.473 0.91,-0.489C0.903,-0.505 0.895,-0.518 0.884,-0.529L0.883,-0.53C0.876,-0.541 0.867,-0.551 0.858,-0.559C0.849,-0.566 0.838,-0.57 0.827,-0.57L0.121,-0.57C0.123,-0.542 0.13,-0.517 0.141,-0.496C0.152,-0.475 0.162,-0.458 0.17,-0.446C0.171,-0.445 0.171,-0.444 0.172,-0.443C0.173,-0.442 0.173,-0.441 0.174,-0.44L0.06,0.02L0.067,0.02ZM0.603,-0.174L0.654,-0.376C0.655,-0.38 0.655,-0.384 0.652,-0.389C0.649,-0.393 0.646,-0.395 0.643,-0.395L0.393,-0.395L0.334,-0.155L0.584,-0.155C0.587,-0.155 0.591,-0.157 0.595,-0.162C0.599,-0.166 0.602,-0.17 0.603,-0.174ZM0.69,-0L0.085,-0L0.195,-0.443C0.194,-0.446 0.19,-0.451 0.185,-0.459C0.18,-0.467 0.174,-0.476 0.168,-0.487C0.162,-0.497 0.156,-0.508 0.151,-0.519C0.146,-0.53 0.143,-0.541 0.142,-0.55L0.827,-0.55C0.836,-0.55 0.844,-0.546 0.852,-0.539C0.859,-0.532 0.865,-0.523 0.871,-0.513C0.876,-0.502 0.879,-0.491 0.882,-0.48C0.884,-0.468 0.884,-0.458 0.882,-0.449L0.795,-0.101C0.793,-0.092 0.788,-0.081 0.78,-0.07C0.772,-0.059 0.763,-0.048 0.753,-0.037C0.742,-0.026 0.731,-0.018 0.72,-0.011C0.709,-0.004 0.699,-0 0.69,-0Z" />
        </g>
      </g>
    </svg>
  );
}
