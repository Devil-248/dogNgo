import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const HelpButton = styled.button`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const HeroCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100px;
  margin-right: 20px;
`;

const DetailsContainer = styled.div`
  margin-top: 20px;
`;

const ContactUsContainer = styled.div`
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  &:hover {
    background-color: #45a049;
  }
`;

const details = [
  { id: 1, type: 'Food', description: 'Donate quality dog food', image: 'path/to/food-image1.jpg' },
  { id: 2, type: 'Treatments', description: 'Fund medical treatments', image: 'path/to/treatment-image1.jpg' },
  { id: 3, type: 'Accessories', description: 'Donate accessories', image: 'path/to/accessory-image1.jpg' },
  { id: 4, type: 'Food', description: 'Provide special dietary food', image: 'path/to/food-image2.jpg' },
  { id: 5, type: 'Medicine', description: 'Donate essential medicines', image: 'path/to/medicine-image1.jpg' },
  { id: 6, type: 'Shelter Supplies', description: 'Provide bedding and shelter', image: 'path/to/shelter-supplies-image1.jpg' },
  { id: 7, type: 'Hygiene Products', description: 'Provide hygiene products', image: 'path/to/hygiene-products-image1.jpg' },
];

const ToHelp = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <Container>
      <h1>Help the Dog NGO</h1>
      <p>Select a way to help:</p>
      {details.map((detail) => (
        <HelpButton key={detail.id} onClick={() => setSelectedDetail(detail)}>
          {detail.type}
        </HelpButton>
      ))}

      {selectedDetail && (
        <DetailsContainer>
          <HeroCard>
            <Image src={selectedDetail.image} alt={selectedDetail.type} />
            <div>
              <h3>{selectedDetail.type}</h3>
              <p>{selectedDetail.description}</p>
            </div>
          </HeroCard>
        </DetailsContainer>
      )}
    </Container>
  );
};

export default ToHelp;
