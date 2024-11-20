'use client'
import { CSSProperties,  useCallback, useEffect, useRef, useState } from "react";

import { useIsVisible } from "@/utils/hooks";
import ReactPlayer from "react-player";
import Image from "next/image";

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

	const { isVisible, targetRef } = useIsVisible(
		{
			root: null,
			rootMargin: "200px",
			threshold: 0.1,
		},
		false,
	);

	const videoRef = useRef<HTMLVideoElement>(null);

	const startVideoOnMouseMove = useCallback(async () => {
		try {
			if(videoRef && videoRef.current)  {
				await videoRef.current.play();
			}
		} catch (e) {
			console.log(e)
			// do nothing
		}
	}, []);

	const stopVideoOnMove = useCallback(() => {
		try {
			if(videoRef && videoRef.current) {
				videoRef.current.pause();
			}
		} catch (e) {
			console.log(e)
			// do nothing
		}
	}, []);

	useEffect(() => {
		if (isVisible) {
			startVideoOnMouseMove();
		} else {
			stopVideoOnMove();
		}
	}, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);
	const [player, setPlayer] = useState<any>(null);
	useEffect(() => {
		setPlayer(() => <ReactPlayer  width={"100%"} height={"100%"}  style={{
			objectFit: "contain",
			aspectRatio: "16/9",
			display: "block",
			width: "100%",
			height: "100%",
			...style,
		}}  url={src} fallback={poster ? <Image src={poster as string} alt={""}/> : <></> } />)
	}, []);
	return (
		<span ref={targetRef as any} title={alt}
			style={{
				position: "relative",
				minHeight: "50px",
				height: "100%",
			}}>
			{player}

    </span>
	);
};

