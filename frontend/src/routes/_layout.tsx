import { createFileRoute } from '@tanstack/react-router'
import React from 'react';

import HomePage  from '../pages/Home/HomePage'

export const Route = createFileRoute('/_layout')({
  component: HomePage
})