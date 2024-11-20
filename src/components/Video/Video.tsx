'use client'
import React, { CSSProperties, useEffect,  useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

type VideoComponentProps = {
	src: string;
	poster?: string;
	alt?: string;
	style?: CSSProperties;
};
export const VideoComponent = ({
	src,
	poster,
	style,
	alt,
}: VideoComponentProps) => {
	//
	// const { isVisible, targetRef } = useIsVisible(
	// 	{
	// 		root: null,
	// 		rootMargin: "200px",
	// 		threshold: 0.1,
	// 	},
	// 	false,
	// );
	//
	// const videoRef = useRef<ReactPlayer | undefined>(null);
	//
	// const startVideoOnMouseMove = useCallback(async () => {
	// 	try {
	// 		if(videoRef && videoRef.current)  {
	// 			await videoRef.current.play();
	// 		}
	// 	} catch (e) {
	// 		console.log(e)
	// 		// do nothing
	// 	}
	// }, []);
	//
	// const stopVideoOnMove = useCallback(() => {
	// 	try {
	// 		if(videoRef && videoRef.current) {
	// 			videoRef;
	// 		}
	// 	} catch (e) {
	// 		console.log(e)
	// 		// do nothing
	// 	}
	// }, []);
	//
	// useEffect(() => {
	// 	if (isVisible) {
	// 		startVideoOnMouseMove();
	// 	} else {
	// 		stopVideoOnMove();
	// 	}
	// }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);
	const [ player, setPlayer ] = useState<React.ReactNode | null>(null);
	useEffect(() => {
		setPlayer(() => <ReactPlayer width={"100%"}
			height={"100%"}
			style={{
				objectFit: "contain",
				aspectRatio: "16/9",
				display: "block",
				width: "100%",
				height: "100%",
				...style,
			}}
			url={src}
			fallback={poster ? <Image src={poster as string}
				alt={""}/> : <></>}/>)
	}, [ src, poster, style ]);

	return (
		<span title={alt}
			style={{
				position: "relative",
				minHeight: "50px",
				height: "100%",
			}}>
			{player}

    </span>
	);
};

