"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Generate = ({
  searchParams,
}: {
  searchParams: { id: string; url: string; box: number };
}) => {
  const [hello, setHello] = useState(searchParams.box);
  const [meme, setImage] = useState<string | null>(null);

  let input1 = useRef<HTMLInputElement>(null);
  let input2 = useRef<HTMLInputElement>(null);
  let input3 = useRef<HTMLInputElement>(null);
  let input4 = useRef<HTMLInputElement>(null);

  const postMeme = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=Ubaidraza&password=Ubaid123&text0=${input1.current?.value}&text1=${input2.current?.value}&text2=${input3.current?.value}&text3=${input4.current?.value}`,
      {
        method: "POST",
      }  

    );
    const response = await data.json();
    setImage(response.data.url);
  };

  useEffect(() => {
    setHello(searchParams.box);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Image
          src={searchParams.url}
          width={300}
          height={300}
          alt="no-image"
        />
      </div>
      {hello == 2 ? (
        <div className="flex justify-center gap-5 mt-5 flex-wrap">
          <form onSubmit={postMeme}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input1}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input2}
            />
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Generate Meme
            </button>
          </form>
        </div>
      ) : hello == 3 ? (
        <div className="flex justify-center gap-5 mt-5">
          <form onSubmit={postMeme}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input1}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input2}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input3}
            />
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Generate Meme
            </button>
          </form>
        </div>
      ) : hello == 4 ? (
        <div className="flex justify-center gap-5 mt-5">
          <form onSubmit={postMeme}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input1}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input2}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input3}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              ref={input4}
            />
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Generate Meme
            </button>
          </form>
        </div>
      ) : null}
      {meme ? (    
        <div className="flex justify-center mt-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src={meme} width={300} height={300} alt="Meme" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Your Generated Meme!</h2>
              <p>Enjoy your meme! Share it with friends.</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Generate;
