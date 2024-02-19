const logoutHandler = async (event) => {
	event.preventDefault();
	const logout = await fetch("/api/users/logout", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});

	if (logout.ok) {
		document.location.replace("/");
	} else {
		alert("Failed to logout");
	}
};

document.querySelector("#logoutBtn").addEventListener("click", logoutHandler);
