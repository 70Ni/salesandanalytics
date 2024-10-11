//sort name

const sortedData = (data) =>
  data.sort((a, b) => {
    // First, compare by user-name
    const nameComparison = a["user-name"].localeCompare(b["user-name"]);

    // If user-names are equal, then compare by order
    if (nameComparison === 0) {
      return a.order - b.order; // Sort by order if names are the same
    }

    return nameComparison; // Otherwise, return the name comparison result
    
  });


