import gql from 'graphql-tag'

const GET_ROBOTS = gql`
{
    robots{
        id,
        code,
        status
      }
}`

export default GET_ROBOTS
