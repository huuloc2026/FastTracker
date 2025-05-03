# Freelancer Project Management System with NestJS and Microservices

## Overview
A comprehensive project management solution for freelancers to easily track project progress, share updates, and collaborate with clients. Built with NestJS following solid architectural principles.

## Features
- **Project Progress Tracking**: Update and visualize project completion status
- **Client Communication**: Share updates and milestones with clients
- **File Management**: Upload and organize project files and links
- **Real-time Notifications**: Clients receive instant updates on project changes
- **Milestone Management**: Break projects into manageable milestones

![Freelancer Project Management System with NestJS and Microservices Image](https://img.freepik.com/free-vector/hand-drawn-flat-design-npl-illustration_23-2149262969.jpg?semt=ais_hybrid&w=740)

## System Architecture Overview
```
┌─────────────────────────────────────────────────────────────────────┐
│ Client Applications                                                 │
│ (Web, Mobile)                                                       │
└───────────────────────┬───────────────────────┬─────────────────────┘
                        │                       │
                        ▼                       ▼
┌─────────────────────────────────────────────────────────────────────┐
│ API Gateway                                                         │
│ (Routes requests to appropriate microservices, handles auth)        │
└───────┬───────────────┬───────────────┬───────┬───────────────┬─────┘
        │               │               │       │               │
        ▼               ▼               ▼       ▼               ▼
┌─────────────┐ ┌─────────────┐ ┌─────────┐ ┌───────┐ ┌────────────────┐
│ Projects    │ │ Users       │ │ Chat    │ │ Files │ │ Notifications  │
│ Service     │ │ Service     │ │ Service │ │Service│ │ Service        │
└─────────────┘ └─────────────┘ └─────────┘ └───────┘ └────────────────┘
```
## Technologies
- **Backend**: NestJS (Node.js framework)
- **Database**: PostgreSQL (with TypeORM)
- **File Storage**: AWS S3 / Google Cloud Storage
- **Authentication**: JWT
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- PostgreSQL database
- AWS/GCP account (for file storage)

## Core Components

### 1. API Gateway
- [ ] Routes requests to appropriate microservices
- [ ] Handles authentication/authorization
- [ ] Request/response transformation

### 2. Projects Service
- [ ] Project creation and management
- [ ] Progress tracking
- [ ] Milestones and deliverables
- [ ] Status updates

### 3. Users Service
- [ ] User profiles (freelancers and clients)
- [ ] Authentication/authorization
- [ ] Roles and permissions

### 4. Chat Service
- [ ] Real-time communication
- [ ] Project-specific discussions
- [ ] File sharing integration

### 5. Files Service
- [ ] File uploads/downloads
- [ ] Version control
- [ ] Storage management

### 6. Notifications Service
- [ ] Real-time updates
- [ ] Email notifications
- [ ] Activity feeds

## Installation
1. Clone the repository:
```bash
git clone https://github.com/huuloc2026/freelancer-project-management.git
cd freelancer-project-management
```
Install dependencies:

```bash
npm install
# or
yarn install
```
Set up environment variables:

```bash
cp .env.example .env
```
Edit the .env file with your configuration

Run database migrations:

```bash
npm run migration:run
Running the Application
Development mode:
```
```bash
npm run start:dev
```
## Production mode:

```bash
npm run build
npm run start:prod
```

## API Documentation
After starting the application, access the Swagger UI at:
```bash
http://localhost:3000/api
```
# Project Structure

```bash
src/
├── core/                  # Framework-agnostic business logic
│   ├── domain/            # Domain models and interfaces
│   ├── application/       # Use cases and application services
│   └── infrastructure/    # Framework-specific implementations
├── modules/               # Feature modules
│   ├── project/           # Project management
│   ├── file/              # File handling
│   ├── communication/     # Client communication
│   └── notification/      # Notification system
└── shared/                # Cross-cutting concerns
```