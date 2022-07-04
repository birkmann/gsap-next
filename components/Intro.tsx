import React from "react";

type Props = {
  inViewport: boolean;
};

const Intro = (props: Props) => {
  const { inViewport } = props;
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8 bg-gray-200">
      <h2 className="mb-8 text-2xl font-bold">
        props.inViewport: {inViewport ? "true" : "false"}
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        commodi illum nobis sequi est in vitae consequuntur, magnam enim fugit
        saepe autem tenetur perferendis nostrum praesentium eos, similique
        dolores. Consequatur?
      </p>
    </div>
  );
};

export default Intro;
