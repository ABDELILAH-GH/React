import React from "react";

import { useNavigate } from "react-router-dom";
export default function Titre4() {
  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/");
  };
  return (
    <div className="container-fluid mt-2 py-5 w-75">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-danger"> How can I get help if I'm stuck on a challenge?</h4>
          <p class="card-text">
          If you find yourself stuck on a challenge, there are several ways to get assistance:<br /><br />
      
      <strong>1. Join the Community Forum:</strong> Frontend Mentor has an active community forum where you can post your questions, share your progress, and receive feedback from other developers. It's a great place to learn and grow through collaboration.<br /><br />
      
      <strong>2. Participate in the Discord Group:</strong> The Discord group is another valuable resource where you can interact with fellow developers in real time. You can discuss challenges, ask for tips, or even find a mentor to guide you.<br /><br />
      
      <strong>3. Study Other Solutions:</strong> After submitting your challenge, you can view solutions shared by other developers. This can help you learn new approaches and improve your coding skills.<br /><br />
      
      <strong>4. Use Online Resources:</strong> Don't hesitate to search for tutorials, articles, or videos related to the problem you're facing. Platforms like MDN, W3Schools, and Stack Overflow are excellent for finding answers.<br /><br />
      
      <strong>5. Take a Break:</strong> Sometimes, stepping away from the problem for a while can give you a fresh perspective. Return with a clear mind and tackle the issue with renewed energy.<br /><br />
      
      Remember, every developer faces challenges. The key is to stay persistent, seek help when needed, and embrace the learning process.
          </p>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={handleRetourClick}
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}
