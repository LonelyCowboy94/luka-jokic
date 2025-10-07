
import styles from './VideoCategory.module.scss';


const VideoCategory = ({ path }) => {
  return (
    <div>
        <svg
            className={styles.categorySvg}
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="200px"
            height="200px"
            viewBox="0 0 64.00 64.00"
            enableBackground="new 0 0 64 64"
            xmlSpace="preserve"
            fill="#000000"
            stroke="#000000"
            strokeWidth="0.00064"
          >
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                
                fill="#0c0c0cff"
                d="M60,0H4C1.789,0,0,1.789,0,4v56c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M10,62H4c-1.104,0-2-0.896-2-2v-7h8V62z M10,51H2v-8h8V51z M10,41H2v-8h8V41z M10,31H2v-8h8V31z M10,21H2v-8h8V21z M10,11H2V4 c0-1.104,0.896-2,2-2h6V11z M62,60c0,1.104-0.896,2-2,2h-6v-9h8V60z M62,51h-8v-8h8V51z M62,41h-8v-8h8V41z M62,31h-8v-8h8V31z M62,21h-8v-8h8V21z M62,11h-8V2h6c1.104,0,2,0.896,2,2V11z"
              ></path>{" "}
              <path {...path}></path>
            </g>
            
          </svg>
    </div>
  )
}

export default VideoCategory