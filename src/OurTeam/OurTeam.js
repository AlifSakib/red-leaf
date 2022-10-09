import React from "react";
import { useLoaderData } from "react-router-dom";
import TeamMember from "../TeamMember/TeamMember";

const OurTeam = () => {
  const members = useLoaderData();
  return (
    <div className="lg:mx-auto lg:w-9/12 md:mx-10">
      <div className="text-start space-y-3">
        <h1 className="font-bold text-6xl">Team Members</h1>
        <p className="text-lg leading-8">
          Four hostile newspapers are more to be feared than a thousand
          bayonets. One reason that cats are happier than people is that they
          have no newspapers. A newspaper is a device for making the ignorant
          more ignorant and the crazy crazier. The news isn't there to tell you
          what happened.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-3">
        {members.map((member) => (
          <TeamMember member={member} key={member.id}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
