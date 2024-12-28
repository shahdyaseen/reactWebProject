 import React from 'react';
 
 const VillageManagement = () => {
  return (
    <>
    {/* Main Content Area */}
    <div className="village-management">
      <button className="add-new">Add New Village</button>
      <div className="village-list">
        <h3>View Village List</h3>
        <input
          type="text"
          className="search-box"
          placeholder="Search villages..."
        />
        <div className="sort-page-container">
          <div className="sort">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort">
              <option value="default">Default</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
          {/* Pagination moved below the sort section */}
          <div className="pagination">
            <span>Page:</span>
            <button className="prev">Prev</button>
            <button className="next">Next</button>
          </div>
        </div>
        <div className="village-item-container" onload="readAll()">
          {/*here show the village items list*/}
        </div>
      </div>
      {/* Modal for Adding New Village */}
      <div id="add-village-modal" className="modal">
        <div className="modal-content">
          <span
            className="close-btn"
            id="close-btnAddingNew"
            onclick="closeAddModal()"
          >
            ×
          </span>
          <h3>Add New Village</h3>
          <form action="">
            <label htmlFor="village-name">Village Name:</label>
            <input
              type="text"
              id="village-name"
              name="village-name"
              required=""
            />
            <br />
            <label htmlFor="region-district">Region/District:</label>
            <input
              type="text"
              id="region-district"
              name="region-district"
              required=""
            />
            <br />
            <label htmlFor="Land Area (sq Km)">Land Area (sq Km):</label>
            <input
              type="number"
              id="Land Area (sq Km)"
              name="Land Area (sq Km)"
              required=""
            />
            <br />
            <label htmlFor="Latitude">Latitude:</label>
            <input type="number" id="Latitude" name="Latitude" required="" />
            <br />
            <label htmlFor="Longitude">Longitude:</label>
            <input type="number" id="Longitude" name="Longitude" required="" />
            <br />
            <label htmlFor="village-file">Upload Image:</label>
            <input type="file" id="village-file" name="village-file" />
            <br />
            <label htmlFor="Categories/Tags">Categories/Tags:</label>
            <input
              type="text"
              id="Categories/Tags"
              name="Categories/Tags"
              placeholder="e.g., rural, urban"
            />
            <br />
            <button
              type="submit"
              id="buttonsubmitForAdd"
              onclick="saveAddedDataToLocal(event)"
            >
              Add Village
            </button>
          </form>
        </div>
      </div>
      {/* shahd adding*/}
      {/* Modal for Update Village */}
      <div id="update-village-modal" className="modalUpdate">
        <div className="modal-content">
          <span className="close-btn" onclick="closeUpdateModal()">
            ×
          </span>
          <h3>Update Village</h3>
          <form id="update-village-form">
            <input type="text" hidden="" className="id-of-update-village-form" />
            <label htmlFor="update-village-name">Village Name:</label>
            <input
              type="text"
              className="update-village-name"
              name="village-name"
              required=""
            />
            <br />
            <label htmlFor="update-region-district">Region/District:</label>
            <input
              type="text"
              className="update-region-district"
              name="region-district"
              required=""
            />
            <br />
            <label htmlFor="update-land-area">Land Area (sq Km):</label>
            <input
              type="number"
              className="update-land-area"
              name="land-area"
              required=""
            />
            <br />
            <label htmlFor="update-latitude">Latitude:</label>
            <input
              type="number"
              className="update-latitude"
              name="latitude"
              required=""
            />
            <br />
            <label htmlFor="update-longitude">Longitude:</label>
            <input
              type="number"
              className="update-longitude"
              name="longitude"
              required=""
            />
            <br />
            <label htmlFor="update-image">Upload Image:</label>
            <input type="file" className="update-image" name="image" />
            <br />
            <button
              type="submit"
              className="update-village-button-submit"
              onclick="updateProcess(event)"
            >
              Update Village
            </button>
          </form>
        </div>
      </div>
      {/* shahd adding*/}
      {/*Adding demographic shahd */}
      <div
        id="update_Demographic-village-modal"
        className="modalUpdateDemographic"
      >
        <div className="modal-content">
          <span className="close-btn" onclick="closeDemographic()">
            ×
          </span>
          <h3>Add Demographic Data</h3>
          <form id="update-Demographic-form">
            <input
              type="text"
              hidden=""
              className="id-of-update-Population-village-form"
            />
            <label htmlFor="Population-Size">Population Size:</label>
            <input
              type="text"
              className="update-village-Population"
              name="village-Population"
              required=""
            />
            <br />
            <label htmlFor="update-Age">Age Distribution:</label>
            <input
              type="text"
              className="update-Age"
              name="update-Age"
              placeholder="e.g., 0-14: 30%, 15-64: 60%, 65+: 10%"
              required=""
            />
            <br />
            <label htmlFor="update-Gender">Gender Ratios:</label>
            <input
              type="text"
              className="update-Gender"
              name="update-Gender"
              placeholder="e.g., Male: 51%, Female: 49%"
              required=""
            />
            <br />
            <label htmlFor="update-Population">Population Growth Rate:</label>
            <input
              type="text"
              className="update-Growth-Population"
              name="update-Population"
              required=""
            />
            <br />
            <button type="submit" onclick="demographicUpdate(event)">
              Add Demographic Data
            </button>
          </form>
        </div>
      </div>
      {/*Adding demographic shahd */}
      {/* Modal for viewing village details */}
      <div id="view-village-modal" className="modal2">
        <div className="modal-content" id="modal-content-view">
          <span
            className="close-btn"
            id="close-btnview-village-modal"
            onclick="closeViewModal()"
          >
            ×
          </span>
          <h3>Village Details</h3>
          <div id="view-village-modal-content">{/* Village Details */}</div>
        </div>
      </div>
    </div>
  </>
  
  );
 }
 
 export default VillageManagement;
 