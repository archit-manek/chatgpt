import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="flex p-2 flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through chat rows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
