export default function sortProcust() {
    const employees = [
      {id: 4, name: 'Dean', country: 'Denmark'},
      {id: 3, name: 'Carl', country: 'Canada'},
      {id: 2, name: 'Bob', country: 'Belgium'},
      {id: 1, name: 'Alice', country: 'Austria'},
      {id: 5, name: 'Ethan', country: 'Egypt'},
    ];
  
    // 👇️ sort by Numeric property ASCENDING (1 - 100)
    const numAscending = [...employees].sort((a, b) => a.id - b.id);
    console.log('numAscending',numAscending);
  
    // ------------------------------------------------
  
    // 👇️ sort by Numeric property DESCENDING (100 - 1)
    const numDescending = [...employees].sort((a, b) => b.id - a.id);
    console.log('numDescending',numDescending);
  
    // ------------------------------------------------
  
    // 👇️ sort by String property ASCENDING (A - Z)
    const strAscending = [...employees].sort((a, b) =>
      a.name > b.name ? 1 : -1,
    );
    console.log('strAscending',strAscending);
  
    // ------------------------------------------------
  
    // 👇️ sort by String property DESCENDING (Z - A)
    const strDescending = [...employees].sort((a, b) =>
      a.name > b.name ? -1 : 1,
    );
    console.log('strDescending',strDescending);

    // ------------------------------------------------
  
    // 👇️ sort by String property ASCENDING (A - Z)
      const strAscendingcountry = [...employees].sort((a, b) =>
      a.country > b.country ? 1 : -1,
    );
    console.log('strAscending country',strAscendingcountry);
  
    // 👇️ sort by String property DESCENDING (Z - A)
    const strDescendingcountry = [...employees].sort((a, b) =>
      a.country > b.country ? -1 : 1,
    );
    console.log('strDescending country',strDescendingcountry);
  
    return (
      <div>
        {numAscending.map(employee => {
          return (
            <div key={employee.id}>
              <h2>id: {employee.id}</h2>
              <h2>name: {employee.name}</h2>
              <h2>country: {employee.country}</h2>
  
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
  