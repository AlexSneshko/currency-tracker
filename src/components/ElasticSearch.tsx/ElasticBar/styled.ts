import { whiteColor } from '@/styles/global'
import styled from 'styled-components'

export const ElasticInputWrapper = styled.div`
  width: 100%;
  border: none;
  border-radius: 0.625rem;
  padding: 1.25rem;
  background-color: #1b2028;
  display: flex;
  align-items: center;
`

export const ElasticInput = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  font-size: 1.25rem;
  width: 100%;
  margin-left: 0.5rem;
  color: #9e9e9e;

  &:focus {
    outline: none;
  }
`

export const ElasicClearButton = styled.button`
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 100;
  background: none;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`
