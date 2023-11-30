import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const PageContainer = styled.div`
  background-color: #f9f8f4;
`;

const NavBar = styled.nav`
  background-color: #ffff;
  color: #f9f8f4 ;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0%;
  margin-left: 65px;
  margin-right: 65px;
  border-radius: 20px;
`;

const Title = styled.h1`
  text-align: left;
  padding: 3%;
  padding-left: 5%;
  font-size: 35px;
`;
const Word1 = styled.span`
  color: #34907F; 
`;

const Par = styled.p`
  color: #903445; 
  text-align: left;
  padding-left: 5%;
`;

const SearchBar = styled.input`
  padding: 13px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-top: 10px; 
  margin-left: 65px; 
  width: 70%; 
`;
const CourseSearchInput = styled(SearchBar)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 40%;
`;
const LocationSearchInput = styled(SearchBar)`
  border-radius: 0;
  margin-left: 0;
  width: 30%;
`;
const SearchButton = styled.button`
  padding: 14px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: orange;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 8%;
`;
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 15px;
  margin-top: 10px;
  margin-left: 60px;
  color: #ccc;
`;


const HomeContainer = styled.div`
  display: flex; /* Use flexbox to display the sections side by side */
`;

const LeftSection = styled.div`
  background-color: #ffff;
  border-radius: 5px;
  text-align: left;
  list-style-type: none;
  padding: 3%;
  margin-top: 10%;
  margin-left: 5%;
  width: 15%;
`;

const RightSection = styled.div`
  margin-top: 8%;
`;

const Picture = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  padding: 15px;
`;
const PictureTextContainer = styled.div`
  display: flex;
  align-items: flex-start; /* Align items at the top */
  margin-top: 20px;
  margin-left: 90px;
  background-color: #ffff;
  width:75%;
  border-radius: 5px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px; 
`;
 
const TutorNo = styled.h2`
padding-left: 10%;
text-align: left;
`
const ListItem = styled.li`
  // Styles for the list items
`;

/*const Input = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  //Custom styles for the radio button circle 
  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #999;
    background-color: #fff;
    margin-right: 4px;
    vertical-align: middle;
  }

  //Custom styles for the radio button circle when checked 
  &:checked::before {
    background-color: blue;
    border-color: blue;
  }
`;*/



const Home = () => {

  const [courseSearchQuery, setCourseSearchQuery] = useState('');
  const [locationSearchQuery, setLocationSearchQuery] = useState('');

  const handleCourseSearch = (event) => {
    setCourseSearchQuery(event.target.value);
    // Perform course search logic here based on the courseSearchQuery
  };

  const handleLocationSearch = (event) => {
    setLocationSearchQuery(event.target.value);
    // Perform location search logic here based on the locationSearchQuery
  };

  const handleSearch = () => {
    // Perform search logic here based on the courseSearchQuery and locationSearchQuery
  };

  return (
    
    <div>
    <PageContainer>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/form">Become a tutor</Link>
        <Link to="/signIn">Sign In</Link>
      </NavBar>

      <Title>
        <h1>Find your <Word1>perfect tutor</Word1> today</h1>
      </Title>

      <Par>
      <p>Tailored Learning Experinace, Right at Your Desktop - Connect with the ideal Home Tutor to Achieve Academic Excellence</p>
      </Par>

      <SearchBarContainer>
          <CourseSearchInput
            type="text"
            placeholder="      What subject tutor are you looking for"
            value={courseSearchQuery}
            onChange={handleCourseSearch}
          />
          <LocationSearchInput
            type="text"
            placeholder="Search location"
            value={locationSearchQuery}
            onChange={handleLocationSearch}
          />
          <SearchButton onClick={handleSearch}>Find tutor</SearchButton>
          <SearchIcon />
        </SearchBarContainer>

      <div>

      <HomeContainer>

        <LeftSection>
          <p>Filters</p>

            <ListItem>Location</ListItem>
            <br></br>
            <div>
            <label>
              <input type="radio" name="radioButton" value="Option 1" />Near me</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 2" />Within 5 km</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 3" />Within 10 km</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 4" />Within 20 km</label>
            </div>

            <br></br>
            <ListItem>Rate</ListItem>
            <br></br>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 1" />Any</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 2" />100 - 300</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 3" />300 - 500</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 4" />500 - 800</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 5" />Above 800</label>
            </div>

            <br></br>
            <ListItem>Work Experience</ListItem>
            <br></br>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 1" />Any experience</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 2" />Student</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 3" />Teacher</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 4" />Professional Teacher</label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="Option 5" />Above 3 years</label>
            </div>

            <br></br>
            <ListItem>Available Weekdays</ListItem>
            <br></br>
            <div>
              <label>
                <input type="checkbox" name="checkbox" value="Option 1" />Monday</label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="checkbox" value="Option 2" />Tuesday</label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="checkbox" value="Option 3" />Wednesday</label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="checkbox" value="Option 4" />Thursday</label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="rcheckbox" value="Option 5" />Friday</label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="rcheckbox" value="Option 6" />Staurday</label>
            </div>
        </LeftSection>

        <RightSection>

          <TutorNo><h2>317 Tutors</h2></TutorNo>

          <PictureTextContainer>
          <Picture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2M-KcXf4PmnQG8GQxFFL94btd7u1zGhy-Q&usqp=CAU" alt="Description of the picture" />
          <Par>
            <Text>Abebe Tesfaye</Text>
            <p>Teacher. Master's degree</p>
            <p>Certified Math and Physics teacher with 5+ years of experience. Specializing in SAT prep. Let's reach your goals together.</p>
          </Par>
          </PictureTextContainer>

          <PictureTextContainer>
          <Picture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2M-KcXf4PmnQG8GQxFFL94btd7u1zGhy-Q&usqp=CAU" alt="Description of the picture" />
          <Par>
            <Text>Abebe Tesfaye</Text>
            <p>Teacher. Master's degree</p>
            <p>Certified Math and Physics teacher with 5+ years of experience. Specializing in SAT prep. Let's reach your goals together.</p>
          </Par>
          </PictureTextContainer>

          <PictureTextContainer>
          <Picture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2M-KcXf4PmnQG8GQxFFL94btd7u1zGhy-Q&usqp=CAU" alt="Description of the picture" />
          <Par>
            <Text>Abebe Tesfaye</Text>
            <p>Teacher. Master's degree</p>
            <p>Certified Math and Physics teacher with 5+ years of experience. Specializing in SAT prep. Let's reach your goals together.</p>
          </Par>
          </PictureTextContainer>

          <PictureTextContainer>
          <Picture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2M-KcXf4PmnQG8GQxFFL94btd7u1zGhy-Q&usqp=CAU" alt="Description of the picture" />
          <Par>
            <Text>Abebe Tesfaye</Text>
            <p>Teacher. Master's degree</p>
            <p>Certified Math and Physics teacher with 5+ years of experience. Specializing in SAT prep. Let's reach your goals together.</p>
          </Par>
          </PictureTextContainer>
          
        </RightSection>

      </HomeContainer>
        

      </div>
      </PageContainer>
    </div>
   
  );
};

export default Home;
